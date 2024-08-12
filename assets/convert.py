import subprocess
import os

def convert_png_to_webp(png_folder, output_file, fps=30, loop=0):
    # Budowanie ścieżki do plików PNG z odpowiednią numeracją
    input_pattern = os.path.join(png_folder, '%d.png')  # Upewnij się, że nazewnictwo jest odpowiednie
    
    # Sprawdzenie czy pliki istnieją
    if not os.path.exists(input_pattern % 1):
        print(f"Błąd: Nie znaleziono plików PNG w folderze {png_folder}. Upewnij się, że są nazwane 1.png, 2.png, itd.")
        return

    # Budowanie polecenia FFmpeg do konwersji PNG do animowanego WEBP
    command = [
        'ffmpeg',
        '-y',  # nadpisz istniejący plik
        '-framerate', str(fps),  # ustaw klatki na sekundę
        '-i', input_pattern,  # ścieżka do plików PNG
        '-loop', str(loop),  # liczba powtórzeń (0 = nieskończona pętla)
        '-c:v', 'libwebp',  # kodek dla WEBP
        '-pix_fmt', 'yuva420p',  # format pikseli z przezroczystością
        '-lossless', '1',  # opcjonalnie, dla bezstratnej jakości
        '-an',  # bez ścieżki dźwiękowej
        output_file
    ]

    # Uruchomienie procesu FFmpeg
    subprocess.run(command)

# Przykład użycia:
png_folder = 'assets'  # Folder z plikami PNG
output_file = './assets/%d.webp'  # Nazwa pliku wynikowego
convert_png_to_webp(png_folder, output_file)
