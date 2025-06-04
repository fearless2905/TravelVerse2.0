<?php

namespace App\Http\Controllers;

use App\Models\Hotel as HotelModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class HotelController extends Controller
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

            $hotel = HotelModel::create($validated);

            return response()->json(['message' => 'Hotel created successfully', 'data' => $hotel], 201);
        } catch (\Exception $e) {
            Log::error('Error creating Hotel: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to create Hotel', 'error' => $e->getMessage()], 500);
        }
    }

    public function index()
    {
        $hotel = HotelModel::all();
        return response()->json(['data' => $hotel], 200);
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

            $hotel = HotelModel::findOrFail($id);
            $hotel->update($validated);

            return response()->json(['message' => 'Hotel updated successfully', 'data' => $hotel], 200);
        } catch (\Exception $e) {
            Log::error('Error updating Hotel: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to update Hotel', 'error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $hotel = HotelModel::findOrFail($id);
            $hotel->delete();

            return response()->json(['message' => 'Hotel deleted successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting Hotel: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to delete Hotel', 'error' => $e->getMessage()], 500);
        }
    }
}
