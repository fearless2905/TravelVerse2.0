<?php

namespace App\Http\Controllers;

use App\Models\Wisata;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class WisataController extends Controller
{
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

            $wisata = Wisata::create($validated);

            return response()->json(['message' => 'Wisata created successfully', 'data' => $wisata], 201);
        } catch (\Exception $e) {
            Log::error('Error creating Wisata: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to create Wisata', 'error' => $e->getMessage()], 500);
        }
    }

    public function index()
    {
        $wisata = Wisata::all();
        return response()->json(['data' => $wisata], 200);
    }

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

            $wisata = Wisata::findOrFail($id);
            $wisata->update($validated);

            return response()->json(['message' => 'Wisata updated successfully', 'data' => $wisata], 200);
        } catch (\Exception $e) {
            Log::error('Error updating Wisata: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to update Wisata', 'error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $wisata = Wisata::findOrFail($id);
            $wisata->delete();

            return response()->json(['message' => 'Wisata deleted successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting Wisata: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to delete Wisata', 'error' => $e->getMessage()], 500);
        }
    }


}
