// Import all images from the assets folder using Vite's glob import
const images = import.meta.glob('../assets/products/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

// Function to get image path by index
const getImg = (index) => {
    // Construct the path key. Note: glob keys are relative to this file? No, relative to root usually or relative to search pattern.
    // Actually glob keys are relative to the importer file usually if starting with ./ or ../
    // Let's debug by printing keys if needed, but standard is relative.
    // The files are named p1.png, p2.png... p30.jpg...
    // We need to match the correct extension.

    const possibleExtensions = ['.png', '.jpg', '.jpeg'];
    for (const ext of possibleExtensions) {
        const path = `../assets/products/p${index}${ext}`;
        if (images[path]) return images[path];
    }
    return ''; // Should not happen if files exist
};

// Helper to assign categories to make the shop look populated
// We have 33 items.
const categories = ['crianca', 'mulher', 'homem'];
const subcategories = ['Sapatilhas', 'Botas', 'Sandálias'];

const products = Array.from({ length: 33 }, (_, i) => {
    const id = i + 1;
    // Distribute categories somewhat evenly but with more children shoes as they seem to vary more in the upload
    // But for the sake of the requested filters "Woman, Man, Child", let's rotate.
    // Actually, looking at the previous user prompts, the brand "Barefoot" and existing "primeiros-passos" suggests kids focus.
    // But user explicitly asked for "mulher, homem, criança".
    const category = categories[i % 3];
    const availableColors = ['#000000', '#FFFFFF', '#8B4513', '#1C1C1C', '#F5F5DC', '#A52A2A', '#000080'];
    const randomColors = availableColors.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);

    // Generate logical sizes based on category
    let sizes = [];
    if (category === 'crianca') {
        sizes = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    } else {
        sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
    }
    // Randomly select some available sizes
    const productSizes = sizes.filter(() => Math.random() > 0.3);

    return {
        id: id,
        name: `Barefoot ${category === 'crianca' ? 'Kids' : category === 'mulher' ? 'Woman' : 'Man'} ${id}`,
        category: category,
        subcategory: subcategories[i % 3], // Just for flavor
        price: (30 + Math.random() * 50).toFixed(2), // Random price between 30 and 80
        image: getImg(id),
        isNew: i > 25, // Mark last few as new
        sizes: productSizes.length > 0 ? productSizes : [sizes[0]], // Ensure at least one size
        colors: randomColors
    };
});

export default products;
