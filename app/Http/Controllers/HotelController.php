<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class HotelController extends Controller
{
    /**
     * Menampilkan semua data hotel.
     */
    public function index()
    {
        $hotels = Hotel::all();

        return response()->json([
            'message' => 'List of hotels retrieved successfully',
            'data' => $hotels
        ], 200);
    }

    /**
     * Menyimpan data hotel baru.
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'nama' => 'required|string|max:255',
                'lokasi' => 'required|string|max:255',
                'maps' => 'nullable|string|max:255',
                'gambar' => 'nullable|string|max:255',
                'detail' => 'nullable|string',
            ]);

            $hotel = Hotel::create($validated);

            return response()->json([
                'message' => 'Hotel created successfully',
                'data' => $hotel
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            Log::error('Error creating Hotel: ' . $e->getMessage());

            return response()->json([
                'message' => 'Failed to create Hotel',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Memperbarui data hotel berdasarkan ID.
     */
    public function update(Request $request, $id)
    {
        try {
            $validated = $request->validate([
                'nama' => 'required|string|max:255',
                'lokasi' => 'required|string|max:255',
                'maps' => 'nullable|string|max:255',
                'gambar' => 'nullable|string|max:255',
                'detail' => 'nullable|string',
            ]);

            $hotel = Hotel::findOrFail($id);
            $hotel->update($validated);

            return response()->json([
                'message' => 'Hotel updated successfully',
                'data' => $hotel
            ], 200);

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            Log::error('Error updating Hotel: ' . $e->getMessage());

            return response()->json([
                'message' => 'Failed to update Hotel',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Menghapus data hotel berdasarkan ID.
     */
    public function destroy($id)
    {
        try {
            $hotel = Hotel::findOrFail($id);
            $hotel->delete();

            return response()->json([
                'message' => 'Hotel deleted successfully'
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error deleting Hotel: ' . $e->getMessage());

            return response()->json([
                'message' => 'Failed to delete Hotel',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
