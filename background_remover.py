from rembg import remove
from PIL import Image

input_path = 'images/leopard.jpg'
output_path = 'images/leopard_bgrem.png'

inp = Image.open(input_path)
output = remove(inp)

output.save(output_path)
Image.open("leopard_bgrem.png")