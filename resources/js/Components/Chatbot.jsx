import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../../css/chatbot.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [width, setWidth] = useState(380);
    const [height, setHeight] = useState(520);
    const messagesEndRef = useRef(null);
    const resizerRef = useRef(null);
    const chatbotRef = useRef(null);
    const isResizing = useRef(false);

    const toggleChatbot = () => setIsOpen(!isOpen);

    const appendMessage = (sender, text) => {
        setMessages((prev) => [...prev, { sender, text }]);
    };

    const getBotResponse = async (message) => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/chat",
                {
                    messages: [
                        {
                            role: "system",
                            content:
                                "Anda adalah asisten wisata untuk Banyuwangi.",
                        },
                        { role: "user", content: message },
                    ],
                }
            );
            console.log("API Response:", response);

            const reply = response.data.reply.trim();
            appendMessage("bot", reply);
        } catch (error) {
            console.error("API Proxy Error:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error setting up request:", error.message);
            }
            appendMessage(
                "bot",
                "Maaf, terjadi kesalahan saat menghubungi layanan AI."
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMessage = input;
        appendMessage("user", userMessage);
        setInput("");
        await getBotResponse(userMessage);
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop =
                messagesEndRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isResizing.current) return;
            const newWidth =
                e.clientX - chatbotRef.current.getBoundingClientRect().left;
            const newHeight =
                e.clientY - chatbotRef.current.getBoundingClientRect().top;
            if (newWidth > 300) setWidth(newWidth);
            if (newHeight > 300) setHeight(newHeight);
        };

        const handleMouseUp = () => {
            isResizing.current = false;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    const startResizing = () => {
        isResizing.current = true;
    };

    return (
        <div id="chatbot-container">
            <button id="chatbot-toggle" onClick={toggleChatbot}>
                <span role="img" aria-label="chat">
                    💬
                </span>
            </button>
            {isOpen && (
                <div
                    id="chatbot"
                    ref={chatbotRef}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        position: "relative",
                    }}
                >
                    <div id="chatbot-header">ChatBot</div>
                    <div
                        id="chatbot-messages"
                        ref={messagesEndRef}
                        style={{ flex: 1, overflowY: "auto" }}
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={
                                    msg.sender === "user"
                                        ? "user-message"
                                        : "bot-message"
                                }
                                style={{
                                    marginBottom: "10px",
                                }}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <form id="chatbot-form" onSubmit={handleSubmit}>
                        <input
                            id="chatbot-input"
                            type="text"
                            placeholder="Tanyakan tentang wisata Banyuwangi..."
                            autoComplete="off"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit">Kirim</button>
                    </form>
                    <div
                        ref={resizerRef}
                        onMouseDown={startResizing}
                        style={{
                            width: "20px",
                            height: "20px",
                            background: "#25d366",
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            cursor: "nwse-resize",
                            borderRadius: "0 0 15px 0",
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Chatbot;
