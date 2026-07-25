// Game Data
let CROP_DATA = {
    'wheat': { name: 'Wheat', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/wheat.png" alt="Wheat" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 5, sellPrice: 12, growTime: 10000, weightRange: [0.9, 1.1], rarity: 'common' },
    'carrot': { name: 'Carrot', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/carrot.png" alt="Carrot" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 14, sellPrice: 32, growTime: 20000, weightRange: [0.85, 1.15], rarity: 'common' },
    'lettuce': { name: 'Lettuce', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/lettuce.png" alt="Lettuce" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 18, sellPrice: 42, growTime: 24000, weightRange: [0.8, 1.2], rarity: 'common' },
    'potato': { name: 'Potato', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/potato.png" alt="Potato" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 24, sellPrice: 55, growTime: 28000, weightRange: [0.9, 1.1], rarity: 'common' },
    'corn': { name: 'Corn', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/corn.png" alt="Corn" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 32, sellPrice: 72, growTime: 35000, weightRange: [0.9, 1.1], rarity: 'common' },
    'strawberry': { name: 'Strawberry', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/strawberry.png" alt="Strawberry" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 42, sellPrice: 92, growTime: 30000, weightRange: [0.95, 1.05], rarity: 'common' },
    'kiwi': { name: 'Kiwi', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/kiwi.png" alt="Kiwi" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 55, sellPrice: 120, growTime: 32000, weightRange: [0.9, 1.1], rarity: 'common' },
    'mango': { name: 'Mango', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/mango.png" alt="Mango" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 70, sellPrice: 155, growTime: 38000, weightRange: [0.85, 1.3], rarity: 'common' },
    'mushroom': { name: 'Mushroom', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/mushroom.png" alt="Mushroom" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 90, sellPrice: 195, growTime: 45000, weightRange: [0.7, 1.3], rarity: 'common' },
    'cherry': { name: 'Cherry', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/cherry.png" alt="Cherry" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 110, sellPrice: 240, growTime: 55000, weightRange: [0.95, 1.05], rarity: 'common' },
    'peach': { name: 'Peach', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/peach.png" alt="Peach" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 135, sellPrice: 290, growTime: 31000, weightRange: [0.9, 1.1], rarity: 'common' },
    'grapes': { name: 'Grapes', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/grapes.png" alt="Grapes" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 130, sellPrice: 280, growTime: 60000, weightRange: [0.9, 1.1], rarity: 'common' },
    'tomato': { name: 'Tomato', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/tomato.png" alt="Tomato" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 165, sellPrice: 350, growTime: 70000, weightRange: [0.85, 1.15], rarity: 'common' },
    'broccoli': { name: 'Broccoli', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/broccoli.png" alt="Broccoli" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 140, sellPrice: 290, growTime: 80000, weightRange: [0.8, 1.3], rarity: 'common' },
    'tree': { name: 'Tree', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/tree.png" alt="Tree" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 180, sellPrice: null, growTime: 120000, yields: ['apple', 'banana', 'orange'], rarity: 'common' },
    'eggplant': { name: 'Eggplant', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/eggplant.png" alt="Eggplant" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 200, sellPrice: 420, growTime: 90000, weightRange: [0.85, 1.3], rarity: 'common' },
    'avocado': { name: 'Avocado', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/avocado.png" alt="Avocado" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 220, sellPrice: 460, growTime: 85000, weightRange: [0.9, 1.15], rarity: 'common' },
    'watermelon': { name: 'Watermelon', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/watermelon.png" alt="Watermelon" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 280, sellPrice: 580, growTime: 100000, weightRange: [0.7, 1.3], rarity: 'common' },
    'lemon': { name: 'Lemon', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/lemon.png" alt="Lemon" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 400, sellPrice: 830, growTime: 75000, weightRange: [0.9, 1.1], rarity: 'common' },
    'pear': { name: 'Pear', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/pear.png" alt="Pear" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 600, sellPrice: 1250, growTime: 85000, weightRange: [0.85, 1.15], rarity: 'common' },
    'cactus': { name: 'Cactus', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/cactus.png" alt="Cactus" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 1200, sellPrice: 2500, growTime: 90000, weightRange: [0.8, 1.3], rarity: 'rare' },
    'chilli': { name: 'Chilli', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/chilli.png" alt="Chilli" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 2500, sellPrice: 5200, growTime: 95000, weightRange: [0.8, 1.25], rarity: 'rare' },
    'palm_tree': { name: 'Palm Tree', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/palm_tree.png" alt="Palm Tree" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 1800, sellPrice: null, growTime: 140000, yields: ['coconut'], rarity: 'rare' },
    'melon': { name: 'Melon', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/melon.png" alt="Melon" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 12000, sellPrice: 25000, growTime: 150000, weightRange: [0.85, 1.15], rarity: 'ultra_rare', stockChance: 0.30 },
    'cherry_blossom': { name: 'Cherry Blossom', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/cherry_blossom.png" alt="Cherry Blossom" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 35000, sellPrice: 72000, growTime: 180000, weightRange: [0.85, 1.15], rarity: 'ultra_rare', stockChance: 0.20 },
    'dango': { name: 'Dango', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/dango.png" alt="Dango" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 80000, sellPrice: 165000, growTime: 200000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.4 },
    'taco': { name: 'Admin Taco', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/taco.png" alt="Admin Taco" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: null, sellPrice: 15000000, growTime: 240000, weightRange: [1.0, 1.0], rarity: 'ultra_rare', stockChance: 1.0, isEvent: true, eventWeather: 'autumn' },
    'bell_pepper': { name: 'Bell Pepper', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/bell_pepper.png" alt="Bell Pepper" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 15000000, sellPrice: 19000000, growTime: 600000, weightRange: [0.95, 1.05], rarity: 'ultra_rare', stockChance: 0.18 },
    'dragonfruit': { name: 'Dragonfruit', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/dragonfruit.png" alt="Dragonfruit" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 1000000, sellPrice: 1200000, growTime: 400000, weightRange: [0.95, 1.07], rarity: 'ultra_rare', stockChance: 0.16 },
    'pomegranate': { name: 'Pomegranate', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/pomegranate.png" alt="Pomegranate" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 5000000, sellPrice: 7500000, growTime: 450000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.15 },
    'litchi': { name: 'Lychee', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/litchi.png" alt="Lychee" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 2000000, sellPrice: 3000000, growTime: 500000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.5 },
    'fig': { name: 'Fig', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/fig.png" alt="Fig" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 50000000, sellPrice: 61000000, growTime: 520000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.14 },
    'star_fruit': { name: 'Star Fruit', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/star_fruit.png" alt="Star Fruit" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 750000000, sellPrice: 1200000000, growTime: 540000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.13 },
    'rambutan': { name: 'Rambutan', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/rambutan.png" alt="Rambutan" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 3000000000, sellPrice: 4600000000, growTime: 580000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.1 },
    'mangosteen': { name: 'Mangosteen', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/mangosteen.png" alt="Mangosteen" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 15000000000, sellPrice: 23000000000, growTime: 600000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.08 },
    'passionfruit': { name: 'Passionfruit', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/passionfruit.png" alt="Passionfruit" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 80000000000, sellPrice: 135000000000, growTime: 620000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.06 },
    'breadfruit': { name: 'Breadfruit', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/breadfruit.png" alt="Breadfruit" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 300000000000, sellPrice: 540000000000, growTime: 650000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.05 },
    'citrus_caviar': { name: 'Citrus Caviar', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/citrus_caviar.png" alt="Citrus Caviar" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 1000000000000, sellPrice: 1700000000000, growTime: 700000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.04 },
    'hala_fruit': { name: 'Hala Fruit', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/hala_fruit.png" alt="Hala Fruit" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 4000000000000, sellPrice: 9500000000000, growTime: 750000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.03 },
    'blue_quandong': { name: 'Blue Quandong', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/blue_quandong.png" alt="Blue Quandong" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 20000000000000, sellPrice: 27500000000000, growTime: 800000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.02 },
    'durian': { name: 'Durian', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/durian.png" alt="Durian" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 999000000000000, sellPrice: 2800000000000000, growTime: 900000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.01 },
    'apple': { name: 'Apple', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/apple.png" alt="Apple" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: null, sellPrice: 135, growTime: null, weightRange: [0.9, 1.1], rarity: 'common' },
    'banana': { name: 'Banana', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/banana.png" alt="Banana" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: null, sellPrice: 220, growTime: null, weightRange: [0.85, 1.15], rarity: 'common' },
    'orange': { name: 'Orange', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/orange.png" alt="Orange" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: null, sellPrice: 175, growTime: null, weightRange: [0.9, 1.1], rarity: 'common' },
    'pineapple': { name: 'Pineapple', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/pineapple.png" alt="Pineapple" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 20000, sellPrice: 30000, growTime: 48000, weightRange: [0.8, 1.1], rarity: 'rare' },
    'coconut': { name: 'Coconut', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/coconut.png" alt="Coconut" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: null, sellPrice: 2900, growTime: null, weightRange: [0.9, 1.3], rarity: 'rare' },
};
const DEFAULT_CROP_DATA = JSON.parse(JSON.stringify(CROP_DATA));

let ACHIEVEMENT_DATA = {
    'harvest_1_wheat': { name: "First Harvest", icon: "🌾", desc: "Harvest your first Wheat.", rwd: 50, type: 'stats.h', tgt: 'wheat', thr: 1 },
    'harvest_5_carrot': { name: "Carrot Collector", icon: "🥕", desc: "Harvest 5 Carrots.", rwd: 150, type: 'stats.h', tgt: 'carrot', thr: 5 },
    'harvest_5_kiwi': { name: "Kiwi King", icon: "🥝", desc: "Harvest 5 Kiwis.", rwd: 200, type: 'stats.h', tgt: 'kiwi', thr: 5 },
    'harvest_5_lettuce': { name: "Lettuce Lover", icon: "🥬", desc: "Harvest 5 Lettuce.", rwd: 180, type: 'stats.h', tgt: 'lettuce', thr: 5 },
    'harvest_5_potato': { name: "Potato Power", icon: "🥔", desc: "Harvest 5 Potatoes.", rwd: 200, type: 'stats.h', tgt: 'potato', thr: 5 },
    'harvest_5_mango': { name: "Mango Tango", icon: "🥭", desc: "Harvest 5 Mangoes.", rwd: 250, type: 'stats.h', tgt: 'mango', thr: 5 },
    'harvest_5_watermelon': { name: "Melon Mania", icon: "🍉", desc: "Harvest 5 Watermelons.", rwd: 300, type: 'stats.h', tgt: 'watermelon', thr: 5 },
    'harvest_1_grapes': { name: "Grape Job!", icon: "🍇", desc: "Harvest your first Grapes.", rwd: 200, type: 'stats.h', tgt: 'grapes', thr: 1 },
    'harvest_1_cherry': { name: "Cherry Picked", icon: "🍒", desc: "Harvest your first Cherries.", rwd: 250, type: 'stats.h', tgt: 'cherry', thr: 1 },
    'harvest_apple': { name: "An Apple a Day", icon: "🍎", desc: "Harvest an Apple from a tree.", rwd: 150, type: 'stats.h', tgt: 'apple', thr: 1 },
    'harvest_banana': { name: "Going Bananas", icon: "🍌", desc: "Harvest a Banana from a tree.", rwd: 200, type: 'stats.h', tgt: 'banana', thr: 1 },
    'harvest_peach': { name: "Peachy Keen", icon: "🍑", desc: "Harvest a Peach.", rwd: 180, type: 'stats.h', tgt: 'peach', thr: 1 },
    'harvest_pineapple': { name: "Pineapple Power", icon: "🍍", desc: "Harvest a Pineapple.", rwd: 220, type: 'stats.h', tgt: 'pineapple', thr: 1 },
    'harvest_coconut': { name: "Coconut Craze", icon: "🥥", desc: "Harvest a Coconut from a tree.", rwd: 250, type: 'stats.h', tgt: 'coconut', thr: 1 },
    'harvest_3_chilli': { name: "Hot Stuff", icon: "🌶️", desc: "Harvest 3 Chilli peppers.", rwd: 500, type: 'stats.h', tgt: 'chilli', thr: 3 },
    'harvest_3_pear': { name: "Pearfect Trio", icon: "🍐", desc: "Harvest 3 Pears.", rwd: 600, type: 'stats.h', tgt: 'pear', thr: 3 },
    'harvest_rainbow': { name: "A Rare Sight", icon: "🌈", desc: "Harvest your first Rainbow crop.", rwd: 5000, type: 'stats.mut', tgt: 'rainbow', thr: 1 },
    'harvest_cosmic': { name: "One in a Million", icon: "🌌", desc: "Harvest your first Cosmic crop.", rwd: 25000, type: 'stats.mut', tgt: 'cosmic', thr: 1 },
    'earn_100_money': { name: "Coin Collector", icon: "💰", desc: "Earn a total of 100 Money.", rwd: 150, type: 'stats.m', thr: 100 },
    'earn_1000_money': { name: "Getting Rich", icon: "💎", desc: "Earn a total of 1,000 Money.", rwd: 250, type: 'stats.m', thr: 1000 },
    'earn_10k_money': { name: "Money Bags", icon: "🏦", desc: "Earn a total of 10,000 Money.", rwd: 1000, type: 'stats.m', thr: 10000 },
    'own_5_plots': { name: "Land Owner", icon: "🏞️", desc: "Own 5 farm plots.", rwd: 200, type: 'state.p', thr: 5 },
    'own_10_plots': { name: "Farm Baron", icon: "🏡", desc: "Own 10 farm plots.", rwd: 500, type: 'state.p', thr: 10 },
    'rebirth_1': { name: "First Rebirth", icon: "🔄", desc: "Complete your first Rebirth.", rwd: 70000, type: 'state.rb', thr: 1 },
    'upgrade_growth_max': { name: "Max Velocity", icon: "🚀", desc: `Reach max growth speed (Level 8).`, rwd: 5000, type: 'state.g', thr: 8 },
    'harvest_silver': { name: "Silver Lining", icon: "🥈", desc: "Harvest your first Silver crop.", rwd: 3000, type: 'stats.mut', tgt: 'silver', thr: 1 },
    'complete_all': { name: "Farm Master", icon: "👑", desc: "Complete all other achievements.", rwd: 10000000, type: 'all' }
};

const QUEST_DEFINITIONS = [
    { id: "harvest_wheat_5", title: "Wheat Harvest", description: "Harvest 5 Wheat.", type: "harvest", targetCrop: "wheat", targetAmount: 5, rewards: { money: 25000, seeds: { 'carrot': 25, 'lettuce': 20 } } },
    { id: "plant_carrot_3", title: "Carrot Planting", description: "Plant 3 Carrots.", type: "plant", targetCrop: "carrot", targetAmount: 3, rewards: { money: 20000, seeds: { 'wheat': 30, 'potato': 20 } } },
    { id: "earn_money_100", title: "Daily Earnings", description: "Earn 250 Money today.", type: "earn_money", targetAmount: 250, rewards: { money: 18000, seeds: { 'potato': 25, 'corn': 15 } } },
    { id: "harvest_lettuce_2", title: "Lettuce Picking", description: "Harvest 2 Lettuce.", type: "harvest", targetCrop: "lettuce", targetAmount: 2, rewards: { money: 30000, seeds: { 'strawberry': 20 } } },
    { id: "plant_any_5", title: "Busy Planter", description: "Plant any 5 crops.", type: "plant_any", targetAmount: 5, rewards: { money: 35000, seeds: { 'corn': 25, 'strawberry': 20 } } },
    { id: "sell_corn_3", title: "Corn Sale", description: "Sell 3 Corn.", type: "sell_produce_type", targetCrop: "corn", targetAmount: 3, rewards: { money: 45000, seeds: { 'kiwi': 20 } } },
    { id: "sell_any_produce_5", title: "Market Day", description: "Sell any 5 produce items.", type: "sell_any_produce", targetAmount: 5, rewards: { money: 32000, seeds: { 'kiwi': 15, 'mango': 12 } } },
    { id: "harvest_golden_1", title: "Golden Touch", description: "Harvest 1 Golden crop.", type: "harvest_golden", targetAmount: 1, rewards: { money: 100000, seeds: { 'mango': 20, 'mushroom': 15 } } },
];

const INITIAL_PLOTS = 3; const MAX_PLOTS = 45; const PLOT_COST_BASE = 75; const PLOT_COST_INCREASE_FACTOR = 1.4;
const TICK_INTERVAL = 100; const AUTOSAVE_INTERVAL = 5000;
const SAVE_CODE_VERSION = '1.3.3';
const LOG_PRUNE_THRESHOLD = 80;
const XOR_SAVE_KEY = 'webfarmkey_34252465488682';
const REDEEMED_PROMOS_STORAGE_KEY = 'webFarmRedeemedPromoCodes';
const normalizePromoCode = (raw) => String(raw || '').trim().replace(/\s+/g, '').toLowerCase();
const DEV_ACTIVATION_CODE = 'dev-2588624836783023489768723895438973895';
const SHOP_REFRESH_MIN = 80 * 1000;
const SHOP_REFRESH_MAX = 80 * 1000;
const GS_COMMANDS_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbz3Y6le35mJSog0HXCTwuBjHtVNjsbBlJVR7qRjD4j-B40hKdBs3Yrl9SLDvmBzdiuS/exec';
const GS_LEADERBOARD_SECRET = '';
const GS_LEADERBOARD_SUBMIT_INTERVAL_MS = 15 * 1000;
const LEADERBOARD_MODAL_REFRESH_MS = 15 * 1000;
const LEADERBOARD_ONLINE_CONSENT_KEY = 'webFarmLeaderboardOnlineConsent';
const LEADERBOARD_CACHE_STORAGE_KEY = 'webFarmLeaderboardSnapshot';
const TIP_DISPLAY_MS = 18000;
const hasLeaderboardOnlineConsent = () => {
    try { return localStorage.getItem(LEADERBOARD_ONLINE_CONSENT_KEY) === '1'; } catch (e) { return false; }
};
const GS_COMMANDS_POLL_INTERVAL_MS = 2000;
const GS_COMMANDS_PROCESSED_IDS_STORAGE_KEY = 'webFarmProcessedSheetCommandIds';
const GS_COMMANDS_LAST_RECEIVED_AT_STORAGE_KEY = 'webFarmSheetConsoleLastReceivedAt';
const GS_COMMANDS_AUTO_RESET_MS = 3 * 60 * 60 * 1000;
const SHOP_BUY_QTY_MODE_KEY = 'webFarmShopBuyQtyMode';
const SHOP_BUY_LEGACY_MAX_KEY = 'webFarmShopBuyMax';

let shopBuyQtyMode = '1';
try {
    const stored = localStorage.getItem(SHOP_BUY_QTY_MODE_KEY);
    if (stored === '1' || stored === '20' || stored === 'max') {
        shopBuyQtyMode = stored;
    } else if (localStorage.getItem(SHOP_BUY_LEGACY_MAX_KEY) === '1') {
        shopBuyQtyMode = 'max';
        localStorage.setItem(SHOP_BUY_QTY_MODE_KEY, 'max');
    }
} catch (e) { /* ignore */ }

const ALWAYS_AVAILABLE_SHOP_ITEMS = 13;
const ULTRA_RARE_SLOTS_IN_SHOP = 3;
const NORMAL_RARE_ROTATING_SLOTS = 7;
const SHOP_STOCK_LIMITS = { common: 120, rare: 55, ultra_rare: 20, default: 80 };
const GEAR_STOCK_LIMITS = { common: 6, rare: 2, ultra_rare: 1, default: 6 };
const GEAR_STOCK_LIMIT_BY_KEY = { cosmic_splash: 2 };
const DAILY_QUEST_COUNT = 2;

const MAX_REBIRTHS = 25;
const REBIRTH_BASE_COST = 37500;
const REBIRTH_COST_MULTIPLIER = 0.805;
const REBIRTH_COST_SCALE = 3.5;
const REBIRTH_MULTIPLIER_AT_MAX = 4;
const getRebirthMultiplier = (count) => Math.pow(REBIRTH_MULTIPLIER_AT_MAX, count / MAX_REBIRTHS);

const REBIRTH_GATED_FRUIT_COUNT = 11;
const REBIRTH_UNLOCK_MILESTONES = [3, 6, 9, 11, 13, 16, 19, 21, 23, 25, 25];
const getRebirthGatedCropKeysAscending = () => {
    const keys = Object.keys(CROP_DATA).filter(k => CROP_DATA[k].seedCost !== null);
    keys.sort((a, b) => {
        const ca = CROP_DATA[a].seedCost ?? 0;
        const cb = CROP_DATA[b].seedCost ?? 0;
        if (cb !== ca) return cb - ca;
        return a.localeCompare(b);
    });
    const top = keys.slice(0, REBIRTH_GATED_FRUIT_COUNT);
    top.sort((a, b) => {
        const ca = CROP_DATA[a].seedCost ?? 0;
        const cb = CROP_DATA[b].seedCost ?? 0;
        if (ca !== cb) return ca - cb;
        return a.localeCompare(b);
    });
    return top;
};
const getMinRebirthsToBuyCrop = (key) => {
    const gated = getRebirthGatedCropKeysAscending();
    const idx = gated.indexOf(key);
    if (idx === -1) return 0;
    return REBIRTH_UNLOCK_MILESTONES[idx] ?? MAX_REBIRTHS;
};
const isCropUnlockedForRebirth = (key) => {
    if (!gameState) return true;
    const min = getMinRebirthsToBuyCrop(key);
    if (min === 0) return true;
    return (gameState.rebirthCount || 0) >= min;
};

const MAX_GROWTH_LEVELS = 8; const GROWTH_MULTIPLIERS = [1.0, 0.85, 0.70, 0.55, 0.40, 0.25, 0.15, 0.08, 0.05]; const GROWTH_UPGRADE_COSTS = [200, 600, 1800, 5000, 12000, 500000, 3000000, 20000000];

const SPECIAL_STATUSES = {
    'golden': { name: 'Golden', icon: '🥇', chance: 0.10, sellMultiplier: 1.8, type: 'generic' },
    'silver': { name: 'Silver', icon: '🥈', chance: 0.05, sellMultiplier: 1.5, type: 'generic' },
    'bronze': { name: 'Bronze', icon: '🥉', chance: 0.15, sellMultiplier: 1.3, type: 'generic' },
    'pollinated': { name: 'Pollinated', icon: '🍯', chance: 0.03, sellMultiplier: 2.5, type: 'generic' },
    'maple': { name: 'Maple', icon: '🍁', chance: 0.002, sellMultiplier: 2.2, type: 'generic' },
    'twisted': { name: 'Twisted', icon: '🌪️', chance: 0.002, sellMultiplier: 2.4, type: 'generic' },
    'rainbow': { name: 'Rainbow', icon: '🌈', chance: 0.03, sellMultiplier: 4.0, type: 'rare_generic' },
    'cosmic': { name: 'Cosmic', icon: '🌌', chance: 0.01, sellMultiplier: 5.0, type: 'rare_generic' },
    'disco': { name: 'Disco', icon: '🪩', chance: 0, sellMultiplier: 2.1, type: 'weather' },
    'scorched': { name: 'Scorched', icon: '☀️', chance: 0, sellMultiplier: 2.0, type: 'weather' },
    'moonlit': { name: 'Moonlit', icon: '🌙', chance: 0, sellMultiplier: 3.0, type: 'weather' },
    'frozen': { name: 'Frozen', icon: '🧊', chance: 0, sellMultiplier: 2.0, type: 'weather' },
    'shocked': { name: 'Shocked', icon: '⚡', chance: 0, sellMultiplier: 3.0, type: 'weather' },
    'wet': { name: 'Wet', icon: '💧', chance: 0, sellMultiplier: 2.0, type: 'weather' },
    'cheese': { name: 'Cheese', icon: '🧀', chance: 0, sellMultiplier: 2.5, type: 'weather' },
};

const WEATHER_CONFIG = {
    'sunny': { name: 'Sunny', icon: '☀️', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [{ status: 'scorched', chance: 0.04 }] },
    'lightning': { name: 'Lightning', icon: '🌩️', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [{ status: 'shocked', chance: 0.10 }, { status: 'wet', chance: 0.10 }] },
    'icy_rain': { name: 'Icy Rain', icon: '🌨️', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [{ status: 'frozen', chance: 0.15 }] },
    'gentle_rain': { name: 'Gentle Rain', icon: '🌦️', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [{ status: 'wet', chance: 0.15 }], growthModifier: 1.15 },
    'night': { name: 'Night', icon: '⭐', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [{ status: 'moonlit', chance: 0.05 }] },
    'autumn': { name: 'Autumn', icon: '🍂', duration_ms: [3 * 60 * 1000, 5 * 60 * 1000], effects: [] },
    'disco': { name: 'Disco', icon: '🪩', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [{ status: 'disco', chance: 0.10 }] },
    'gale': { name: 'Gale', icon: '🌪️', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [{ status: 'twisted', chance: 0.12 }] },
};
const WEATHER_TYPE_KEYS = Object.keys(WEATHER_CONFIG);
const WEATHER_COMMAND_ONLY_KEYS = ['disco'];

const GEAR_DATA = {
    'wet_splash': { name: 'Wet Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/wet_splash.png" alt="Wet Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 10000, splashCount: 10, splashStatus: 'wet', description: 'Gives 10 random crops Wet mutation.', rarity: 'common', stockChance: 0.90 },
    'silver_splash': { name: 'Silver Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/silver_splash.png" alt="Silver Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 100000, splashCount: 12, splashStatus: 'silver', description: 'Gives 12 random crops Silver mutation.', rarity: 'common', stockChance: 0.85 },
    'scorched_splash': { name: 'Scorched Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/scorched_splash.png" alt="Scorched Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 80000, splashCount: 10, splashStatus: 'scorched', description: 'Gives 10 random crops Scorched mutation.', rarity: 'common', stockChance: 0.75 },
    'golden_splash': { name: 'Golden Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/golden_splash.png" alt="Golden Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 300000, splashCount: 10, splashStatus: 'golden', description: 'Gives 10 random crops Golden mutation.', rarity: 'rare', stockChance: 0.25 },
    'rainbow_splash': { name: 'Rainbow Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/rainbow_splash.png" alt="Rainbow Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 800000, splashCount: 10, splashStatus: 'rainbow', description: 'Gives 10 random crops Rainbow mutation.', rarity: 'rare', stockChance: 0.15 },
    'cosmic_splash': { name: 'Cosmic Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/cosmic_splash.png" alt="Cosmic Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 20000000, splashCount: 10, splashStatus: 'cosmic', description: 'Gives 10 random crops Cosmic mutation.', rarity: 'ultra_rare', stockChance: 0.05 }
};

const PROMO_REWARDS = {
    'macbooksuck': (state) => {
        const invKey = 'rainbow_taco';
        if (!state.inventory.produce[invKey]) {
            state.inventory.produce[invKey] = { count: 0, totalWeight: 0.0, isFavorited: false };
        }
        state.inventory.produce[invKey].count += 1;
        state.inventory.produce[invKey].totalWeight += 1.0;
        addMessage("Promo 'MACBOOKSUCK' redeemed: +1 🌈 Rainbow Admin Taco!", 'gold', true);
    }
};

const UPDATE_LOG_ENTRIES = [
    {
        id: '1.3.3',
        title: 'v1.3.3 - Durian and fixes',
        changes: [
            'Added Durian fruit',
            'Fixed a bug where nothing happens in the game unless something else is clicked',
            'Replaced promo codes',
            'Increased daily quest rewards',
            'Removed Super Seeds',
            'Cleaned up dead code'
        ]
    },
    { id: '1.3.2', title: 'v1.3.2 Freeze Fix & Leaderboard Filtering', changes: ['Fixed game loop freezing/stuck visual updates when crops finish growing', 'Filtered leaderboard entries containing scientific notation or error values'] },
    { id: '1.3.1', title: 'v1.3.1 Extra Plots!', changes: ['9 More Plots', 'Added Hala Fruit', 'Added Blue Quandong', '2 More Rebirths', 'Minor UI Changes', 'Bug Fixes'] },
    { id: '1.3', title: 'v1.3 The Next Chapter', changes: ['Added Breadfruit', 'Added Citrus Caviar', 'Added Mutations During Growth', 'Can Now Click Name Above Farm To Change', 'Big Background Code Changes', 'Changed Some Pricing', 'Moved Achievement Pop Up To Stop Blocking Top Bar', 'Leaderboard Now Counts Rebirths In', 'Bug Fixes'] },
    { id: '1.2.8', title: 'v1.2.8 Super Seeded', changes: ['Added Mangosteen and Passionfruit', 'Added Leaderboards', 'Added Twisted Mutation', 'Added Gale Weather Event', 'Revamped Tutorial Pop Ups', 'Added 8th Growth Upgrade', 'Bug Fixes'] },
    { id: '1.2.7', title: 'v1.2.7 A Little Easier', changes: ['Rarer Fruits And Gear Stock Slightly More', 'Shop: 1 / 20 / Max buy toggle', 'Slightly Easier Progression', 'Later Rebirths Cost Slightly Less', 'Added Update Log Menu', 'Added Console For Serverwide Command Running', 'Bug Fixes'] },
    { id: '1.2.6', title: 'v1.2.6 Star Season', changes: ['Added Star Fruit and Rambutan', 'Rebirths Now Unlock Better Fruits', 'Added Maple Mutation and Autumn Weather Event', 'New Promo Codes', 'Added Keybinds', 'Added Search to Inventory', 'UI Changes', 'Bug Fixes'] },
    { id: '1.2.5', title: 'v1.2.5 Figs', changes: ['Added Fig', '2 More Rebirths', 'Farm Name', 'Promo Codes', 'Pricing and Balancing Changes', 'Limited Stock Added to Gears', 'Restart Progress Option', 'Bug Fixes'] },
    { id: '1.2.4', title: 'v1.2.4 Overpowering', changes: ['Added Pomegranate', 'Added Litchi', 'Added Golden Splash', 'Added Cosmic Splash', 'Moved UI Tiles Around', 'Added 3 More Rebirth Levels', 'Minor Theme Changes', 'Bug Fixes'] }
];

let gameState = null; let gameLoopInterval = null; let autoSaveInterval = null;
let eventListenersBound = false;

const mergePromoCodesIntoGameState = () => {
    if (!gameState) return;
    let fromLs = [];
    try {
        const raw = localStorage.getItem(REDEEMED_PROMOS_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        if (Array.isArray(parsed)) fromLs = parsed.map(normalizePromoCode).filter(Boolean);
    } catch (e) { /* ignore */ }
    const fromSave = (Array.isArray(gameState.usedPromoCodes) ? gameState.usedPromoCodes : []).map(normalizePromoCode);
    gameState.usedPromoCodes = [...new Set([...fromSave, ...fromLs])];
};

const rememberPromoCodeUsed = (normalized) => {
    mergePromoCodesIntoGameState();
    if (!gameState.usedPromoCodes.includes(normalized)) gameState.usedPromoCodes.push(normalized);
    try {
        localStorage.setItem(REDEEMED_PROMOS_STORAGE_KEY, JSON.stringify(gameState.usedPromoCodes));
    } catch (e) {
        console.warn('Persist redeemed promo codes failed', e);
    }
};

let isDevModeEnabled = false;
let achievementPopupTimeout = null; let tipPopupTimeout = null;
let sayBannerTimeout = null;
let sheetCommandPollInterval = null;
let leaderboardSubmitInterval = null;
let leaderboardModalRefreshInterval = null;
let lbSubmitInFlight = false;
const GS_CLIENT_ID_STORAGE_KEY = 'webFarmPresenceClientId';
let activeTooltipPlotId = null;
let selectedGearToPlace = null;
let produceActionMode = 'sell';

const moneyEl = document.getElementById('money'); const farmGridEl = document.getElementById('farm-grid'); const seedInventoryEl = document.getElementById('seed-inventory'); const produceInventoryEl = document.getElementById('produce-inventory'); const buySeedsEl = document.getElementById('buy-seeds'); const messagesEl = document.getElementById('messages'); const saveCodeOutputEl = document.getElementById('save-code-output'); const saveCodeInputEl = document.getElementById('save-code-input'); const copyCodeButtonEl = document.getElementById('copy-code-button'); const farmUpgradesContainerEl = document.getElementById('farm-upgrades-container'); const achievementsListEl = document.getElementById('achievements-list'); const devConsoleEl = document.getElementById('dev-console'); const devCommandInputEl = document.getElementById('dev-command-input');
const inventorySearchInputEl = document.getElementById('inventory-search-input');
const achievementPopupEl = document.getElementById('achievement-popup'); const achPopupIconEl = document.getElementById('ach-popup-icon'); const achPopupTitleEl = document.getElementById('ach-popup-title'); const achPopupRewardEl = document.getElementById('ach-popup-reward');
const tipPopupEl = document.getElementById('tip-popup'); const tipPopupTextEl = document.getElementById('tip-popup-text');
const harvestAllButtonEl = document.getElementById('harvest-all-button');
const sellAllProduceButtonEl = document.getElementById('sell-all-produce-button');
const plotTooltipEl = document.getElementById('plot-tooltip'); const tooltipCropNameEl = document.getElementById('tooltip-crop-name'); const tooltipTimeLeftEl = document.getElementById('tooltip-time-left'); const tooltipWeightPotentialEl = document.getElementById('tooltip-weight-potential'); const tooltipWeightActualEl = document.getElementById('tooltip-weight-actual');
const tooltipSellMultiplierEl = document.getElementById('tooltip-sell-multiplier');
const plantAllButtonEl = document.getElementById('plant-all-button');
const shopRefreshTimerEl = document.getElementById('shop-refresh-timer');
const dailyQuestsSectionEl = document.getElementById('daily-quests');
const dailyQuestsListEl = document.getElementById('daily-quests-list');
const questResetTimerEl = document.getElementById('quest-reset-timer');
const questStatusTextEl = document.getElementById('quest-status-text');
const weatherDisplayEl = document.getElementById('weather-display');
const inventoryEl = document.getElementById('inventory');
const buyGearsEl = document.getElementById('buy-gears');
const rebirthContentEl = document.getElementById('rebirth-content');
const updateLogBackdropEl = document.getElementById('update-log-backdrop');
const updateLogListEl = document.getElementById('update-log-list');
const updateLogDetailEl = document.getElementById('update-log-detail');
const leaderboardBackdropEl = document.getElementById('leaderboard-backdrop');
const leaderboardContentEl = document.getElementById('leaderboard-content');
const topAnnouncementEl = document.getElementById('top-announcement');

const xorCipher = (s, k) => { let r = ''; for (let i = 0; i < s.length; i++) r += String.fromCharCode(s.charCodeAt(i) ^ k.charCodeAt(i % k.length)); return r; };
const calculateChecksum = (s) => { let sum = 0; for (let i = 0; i < s.length; i++) sum = (sum + s.charCodeAt(i) * (i + 1)) % 65536; return sum.toString(16).padStart(4, '0'); };
const calculatePlotCost = () => { if (!gameState) return PLOT_COST_BASE; const p = Math.max(0, gameState.totalPlots - INITIAL_PLOTS), f = gameState.totalPlots > 15 ? PLOT_COST_INCREASE_FACTOR * 1.1 : PLOT_COST_INCREASE_FACTOR; return Math.floor(PLOT_COST_BASE * Math.pow(f, p)); };
const getRandomWeight = (range) => !range ? 1.0 : Math.random() * (range[1] - range[0]) + range[0];
const shuffleArray = (array) => { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; };
const getRandomDuration = (durationRangeMs) => Math.floor(Math.random() * (durationRangeMs[1] - durationRangeMs[0] + 1)) + durationRangeMs[0];

const formatMoney = (amount) => {
    if (amount === null || amount === undefined) return '0';
    const num = typeof amount === 'number' ? amount : parseFloat(amount);
    if (isNaN(num)) return '0';
    if (num < 0) return '-' + formatMoney(-num);
    if (num < 1000) return Math.floor(num).toString();
    const suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi'];
    const tier = Math.min(Math.floor(Math.log10(Math.abs(num)) / 3), suffixes.length - 1);
    const suffix = suffixes[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = num / scale;
    return scaled.toFixed(2).replace(/\.?0+$/, '') + suffix;
};

const formatTime = (ms, includeSeconds = true) => {
    if (ms <= 0) return includeSeconds ? "0s" : "0m";
    let totalSeconds = Math.ceil(ms / 1000);
    const h = Math.floor(totalSeconds / 3600); totalSeconds %= 3600;
    const m = Math.floor(totalSeconds / 60); const s = totalSeconds % 60;
    let timeStr = ""; if (h > 0) timeStr += `${h}h `; if (m > 0) timeStr += `${m}m `;
    if (includeSeconds || (h === 0 && m === 0)) { if (s > 0 || (h === 0 && m === 0)) timeStr += `${s}s`; }
    return timeStr.trim() || (includeSeconds ? "0s" : "0m");
};

const addMessage = (m, t = 'info', f = false) => {
    const l = m.toLowerCase(); if (!f && l.includes('generated save')) return;
    const c = messagesEl; if (!c) return;
    let h = c.querySelector('h2'); if (!h) { h = document.createElement('h2'); h.textContent = '📜 Log'; c.prepend(h); }
    const p = document.createElement('p'); const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit" });
    p.textContent = `[${time}] ${m}`; p.className = `log-${t}`; h.after(p);
    const msgs = c.querySelectorAll('p'); if (msgs.length > LOG_PRUNE_THRESHOLD) { if (c.lastElementChild && c.lastElementChild.tagName === 'P') { c.removeChild(c.lastElementChild); } }
    c.scrollTop = 0;
};

const showTopAnnouncement = (message, durationMs = 6000, variant = 'chat') => {
    if (!topAnnouncementEl) return;
    const txt = String(message || '').trim(); if (!txt) return;
    topAnnouncementEl.classList.remove('announce-chat', 'announce-action');
    topAnnouncementEl.classList.add(variant === 'action' ? 'announce-action' : 'announce-chat');
    topAnnouncementEl.textContent = txt; topAnnouncementEl.classList.add('active');
    if (sayBannerTimeout) clearTimeout(sayBannerTimeout);
    sayBannerTimeout = setTimeout(() => { topAnnouncementEl.classList.remove('active', 'announce-chat', 'announce-action'); topAnnouncementEl.textContent = ''; }, durationMs);
};

const broadcastAdminNotice = (text, logClass = 'action', durationMs = 6000, forceLog = false) => {
    const t = String(text || '').trim(); if (!t) return;
    showTopAnnouncement(t, durationMs, logClass === 'chat' ? 'chat' : 'action');
    if (isDevModeEnabled && messagesEl) addMessage(t, logClass, forceLog);
};

const parseItemKey = (itemKey) => {
    let tempKey = itemKey; const foundStatuses = []; const allStatusKeysSorted = Object.keys(SPECIAL_STATUSES).sort(); let statusesParsed = true;
    while (statusesParsed) {
        statusesParsed = false;
        for (const status of allStatusKeysSorted) {
            if (tempKey.startsWith(status + '_')) { foundStatuses.push(status); tempKey = tempKey.substring(status.length + 1); statusesParsed = true; break; }
        }
    }
    let baseKey = itemKey; let statusKeys = [];
    if (CROP_DATA[tempKey]) { baseKey = tempKey; statusKeys = foundStatuses; }
    let sellMultiplier = 1; let displayPrefix = ""; let namePrefix = "";
    statusKeys.forEach(statusKey => {
        const statusInfo = SPECIAL_STATUSES[statusKey];
        if (statusInfo) { sellMultiplier *= statusInfo.sellMultiplier; displayPrefix += `${statusInfo.icon}`; namePrefix += `${statusInfo.name} `; }
    });
    return { baseKey, statusKeys, sellMultiplier, displayPrefix: displayPrefix ? displayPrefix + ' ' : '', namePrefix };
};

const calculateGrowthMultiplier = () => gameState ? (GROWTH_MULTIPLIERS[gameState.growthSpeedLevel] ?? GROWTH_MULTIPLIERS[0]) : 1.0;
const calculateGrowthUpgradeCost = () => (!gameState || gameState.growthSpeedLevel >= MAX_GROWTH_LEVELS) ? Infinity : (GROWTH_UPGRADE_COSTS[gameState.growthSpeedLevel] ?? Infinity);

const buildGrowingPlotMutations = (presetStatuses = []) => {
    const ss = [...presetStatuses].filter(s => SPECIAL_STATUSES[s]);
    if (ss.length >= 2) return ss;
    const randRare = Math.random();
    if (randRare < SPECIAL_STATUSES.cosmic.chance) ss.push('cosmic');
    else if (randRare < SPECIAL_STATUSES.cosmic.chance + SPECIAL_STATUSES.rainbow.chance) ss.push('rainbow');
    else if (Math.random() < SPECIAL_STATUSES.pollinated.chance) ss.push('pollinated');
    else if (Math.random() < SPECIAL_STATUSES.golden.chance) ss.push('golden');
    else if (Math.random() < SPECIAL_STATUSES.silver.chance) ss.push('silver');
    else if (Math.random() < SPECIAL_STATUSES.bronze.chance) ss.push('bronze');
    else {
        const mapleChance = (gameState.currentWeather === 'autumn') ? 0.07 : SPECIAL_STATUSES.maple.chance;
        if (Math.random() < mapleChance) ss.push('maple');
        else {
            const twistedChance = (gameState.currentWeather === 'gale') ? 0.07 : SPECIAL_STATUSES.twisted.chance;
            if (Math.random() < twistedChance) ss.push('twisted');
            else if (gameState.currentWeather && WEATHER_CONFIG[gameState.currentWeather]?.effects) {
                for (const effect of WEATHER_CONFIG[gameState.currentWeather].effects) {
                    if (Math.random() < effect.chance) { ss.push(effect.status); break; }
                }
            }
        }
    }
    ss.sort();
    return ss;
};

const getGearStockBaseLimit = (key) => {
    if (Object.prototype.hasOwnProperty.call(GEAR_STOCK_LIMIT_BY_KEY, key)) return GEAR_STOCK_LIMIT_BY_KEY[key];
    const g = GEAR_DATA[key];
    return GEAR_STOCK_LIMITS[g?.rarity || 'common'] ?? GEAR_STOCK_LIMITS.default;
};

// --- Tooltips ---
const inventoryTooltipEl = document.getElementById('inventory-tooltip');
const showInventoryTooltip = (li, event) => {
    if (!inventoryTooltipEl) return;
    const ttName = li.dataset.ttName || '';
    const ttDetail = li.dataset.ttDetail || '';
    const ttWeight = li.dataset.ttWeight || '';
    let html = `<div class="inv-tt-name">${ttName}</div><div class="inv-tt-detail">${ttDetail.replace(/\|/g, '<br>')}</div>`;
    if (ttWeight) html += `<div class="inv-tt-weight">Avg Weight: ${ttWeight}</div>`;
    inventoryTooltipEl.innerHTML = html;
    inventoryTooltipEl.classList.add('visible');
    moveInventoryTooltip(event);
};
const hideInventoryTooltip = () => { if (inventoryTooltipEl) inventoryTooltipEl.classList.remove('visible'); };
const moveInventoryTooltip = (event) => {
    if (!inventoryTooltipEl?.classList.contains('visible')) return;
    const offsetX = 15, offsetY = 10;
    let x = event.clientX + offsetX, y = event.clientY + offsetY;
    const tooltipRect = inventoryTooltipEl.getBoundingClientRect();
    if (x + tooltipRect.width > window.innerWidth) x = event.clientX - tooltipRect.width - offsetX;
    if (y + tooltipRect.height > window.innerHeight) y = event.clientY - tooltipRect.height - offsetY;
    inventoryTooltipEl.style.left = `${x}px`;
    inventoryTooltipEl.style.top = `${y}px`;
};

const getFormattedTimeLeft = (plotData) => {
    if (plotData?.state === 'growing' && plotData.growDuration) {
        let environmentalSpeedBoost = 1.0;
        if (gameState.currentWeather === 'gentle_rain' && WEATHER_CONFIG.gentle_rain.growthModifier) {
            environmentalSpeedBoost = WEATHER_CONFIG.gentle_rain.growthModifier;
        }
        let timeLeftMs;
        if (plotData.accruedGrowth !== undefined) {
            timeLeftMs = (plotData.growDuration - plotData.accruedGrowth) / environmentalSpeedBoost;
        } else {
            const effectiveGrowDuration = plotData.growDuration / environmentalSpeedBoost;
            const timeElapsed = Date.now() - plotData.plantedTime;
            timeLeftMs = effectiveGrowDuration - timeElapsed;
        }
        return Math.max(0, timeLeftMs) > 0 ? formatTime(Math.max(0, timeLeftMs)) : "Almost done!";
    }
    return "";
};

const updateActiveTooltip = () => {
    if (activeTooltipPlotId !== null && gameState && plotTooltipEl.classList.contains('visible')) {
        const plotData = gameState.plots[activeTooltipPlotId];

        if (plotData && (plotData.state === 'growing' || plotData.state === 'ready') && plotData.crop) {
            const cropInfo = CROP_DATA[plotData.crop];
            const specialStatuses = plotData.specialStatuses || [];
            let cropNamePrefix = "";

            if (specialStatuses.length > 0) {
                cropNamePrefix = specialStatuses.map(sKey => {
                    const statusInfo = SPECIAL_STATUSES[sKey];
                    return statusInfo ? `${statusInfo.icon} ${statusInfo.name}` : '';
                }).filter(Boolean).join(', ') + ' ';
            }
            tooltipCropNameEl.textContent = `${cropNamePrefix}${cropInfo?.name || 'Unknown'}`;

            if (plotData.state === 'ready') {
                tooltipTimeLeftEl.textContent = 'Ready to Harvest!';
            } else {
                tooltipTimeLeftEl.textContent = `Time Left: ${getFormattedTimeLeft(plotData) || 'Almost done!'}`;
            }

            if (cropInfo?.weightRange && tooltipWeightPotentialEl) {
                tooltipWeightPotentialEl.textContent = `Potential: ${cropInfo.weightRange[0].toFixed(1)}x - ${cropInfo.weightRange[1].toFixed(1)}x`;
                tooltipWeightPotentialEl.style.display = 'inline-block';
            } else if (tooltipWeightPotentialEl) {
                tooltipWeightPotentialEl.style.display = 'none';
            }

            if (plotData.finalWeightMultiplier && tooltipWeightActualEl) {
                const progress = calculateGrowthProgress(plotData);
                let currentVisualWeightText = "Growing...";
                let finalWeightText = ` (Final: ${plotData.finalWeightMultiplier.toFixed(2)}x)`;

                if (plotData.state === 'ready') {
                    currentVisualWeightText = `Final Weight: ${plotData.finalWeightMultiplier.toFixed(2)}x`;
                    finalWeightText = '';
                } else if (progress >= 0.66) {
                    currentVisualWeightText = `Maturing ~${(plotData.finalWeightMultiplier * 2 / 3).toFixed(2)}x`;
                } else if (progress >= 0.33) {
                    currentVisualWeightText = `Growing ~${(plotData.finalWeightMultiplier / 3).toFixed(2)}x`;
                }
                tooltipWeightActualEl.textContent = `Weight: ${currentVisualWeightText}${finalWeightText}`;
                tooltipWeightActualEl.style.display = 'inline-block';
            } else if (tooltipWeightActualEl) {
                tooltipWeightActualEl.style.display = 'none';
            }

            if (tooltipSellMultiplierEl && specialStatuses.length > 0) {
                let totalMultiplier = 1;
                specialStatuses.forEach(sKey => { totalMultiplier *= (SPECIAL_STATUSES[sKey]?.sellMultiplier || 1); });
                if (totalMultiplier > 1) {
                    tooltipSellMultiplierEl.textContent = `💰 Sell Bonus: ${totalMultiplier.toFixed(1)}x`;
                    tooltipSellMultiplierEl.style.display = 'inline-block';
                } else {
                    tooltipSellMultiplierEl.style.display = 'none';
                }
            } else if (tooltipSellMultiplierEl) {
                tooltipSellMultiplierEl.style.display = 'none';
            }

        } else {
            hidePlotTooltip();
        }
    }
};

const showPlotTooltip = (plotId, event) => {
    if (!gameState || !plotTooltipEl) return;
    const plotData = gameState.plots[plotId];
    if (!plotData || (plotData.state !== 'growing' && plotData.state !== 'ready')) { hidePlotTooltip(); return; }
    activeTooltipPlotId = plotId; updateActiveTooltip(); movePlotTooltip(event); plotTooltipEl.classList.add('visible');
};
const hidePlotTooltip = () => { if (plotTooltipEl) plotTooltipEl.classList.remove('visible'); activeTooltipPlotId = null; };
const movePlotTooltip = (event) => {
    if (!plotTooltipEl?.classList.contains('visible')) return;
    const offsetX = 15, offsetY = 10;
    let x = event.clientX + offsetX, y = event.clientY + offsetY;
    const tooltipRect = plotTooltipEl.getBoundingClientRect(), bodyRect = document.body.getBoundingClientRect();
    if (x + tooltipRect.width > bodyRect.width) x = event.clientX - tooltipRect.width - offsetX;
    if (y + tooltipRect.height > bodyRect.height) y = event.clientY - tooltipRect.height - offsetY;
    plotTooltipEl.style.left = `${x}px`; plotTooltipEl.style.top = `${y}px`;
};

// --- Core UI Update ---
const syncShopBuyModeButtons = () => {
    const one = document.getElementById('shop-buy-mode-one');
    const twenty = document.getElementById('shop-buy-mode-twenty');
    const max = document.getElementById('shop-buy-mode-max');
    if (!one || !twenty || !max) return;
    one.classList.toggle('active', shopBuyQtyMode === '1');
    twenty.classList.toggle('active', shopBuyQtyMode === '20');
    max.classList.toggle('active', shopBuyQtyMode === 'max');
};

const setShopBuyQtyMode = (mode) => {
    if (mode !== '1' && mode !== '20' && mode !== 'max') return;
    shopBuyQtyMode = mode;
    try { localStorage.setItem(SHOP_BUY_QTY_MODE_KEY, shopBuyQtyMode); } catch (e) { }
    syncShopBuyModeButtons(); updateUI();
};

const applyInventorySearch = () => {
    if (!inventorySearchInputEl) return;
    const q = inventorySearchInputEl.value.trim().toLowerCase();
    document.querySelectorAll('#seed-inventory li, #produce-inventory li').forEach(li => {
        const name = (li.querySelector('.inv-tile-name')?.textContent || '').toLowerCase();
        li.style.display = (!q || name.includes(q)) ? '' : 'none';
    });
};

const updateUI = () => {
    if (!gameState) return;
    syncShopBuyModeButtons();
    const farmNameHeadingEl = document.getElementById('farm-name');
    if (farmNameHeadingEl) farmNameHeadingEl.textContent = gameState.farmName || 'Your Farm';

    moneyEl.textContent = formatMoney(gameState.money);
    moneyEl.title = gameState.money.toLocaleString() + ' coins';

    if (weatherDisplayEl) {
        const wInfo = WEATHER_CONFIG[gameState.currentWeather];
        weatherDisplayEl.innerHTML = wInfo ? `Weather: ${wInfo.icon} ${wInfo.name}` : "Weather: Unknown";
    }

    const generateInventoryList = (items, type) => {
        const sorted = Object.entries(items).map(([key, data]) => {
            const { baseKey, displayPrefix, statusKeys, sellMultiplier } = parseItemKey(key);
            const baseItemInfo = CROP_DATA[baseKey];
            if (type === 'seeds' && (data <= 0 || baseItemInfo?.seedCost === null)) return null;
            if (type === 'produce' && data.count <= 0) return null;
            return { key, data, name: baseItemInfo?.name || baseKey, icon: baseItemInfo?.icon || '?', displayPrefix, baseKey, statusKeys, sellMultiplier };
        }).filter(Boolean).sort((a, b) => a.name.localeCompare(b.name));

        if (sorted.length === 0) {
            return `<li class="empty-grid-msg">${type === 'seeds' ? 'No seeds. Buy some from the shop!' : 'No produce. Harvest crops!'}</li>`;
        }

        return sorted.map(item => {
            const isLocked = type === 'produce' && item.data.isFavorited;
            const count = type === 'seeds' ? item.data : item.data.count;
            const avgWeight = (type === 'produce' && count > 0 && item.data.totalWeight) ? (item.data.totalWeight / count).toFixed(2) : null;
            const displayName = item.statusKeys.map(s => SPECIAL_STATUSES[s]?.name).filter(Boolean).join(' ') + (item.statusKeys.length ? ' ' : '') + item.name;
            const statusIcons = item.statusKeys.map(s => SPECIAL_STATUSES[s]?.icon).filter(Boolean).join('') + ' ';
            let ttName = `${statusIcons}${displayName}`;
            let ttDetail = `Count: ${count}` + (avgWeight ? ` | Avg Weight: ${avgWeight}` : '');

            if (type === 'produce') {
                const baseInfo = CROP_DATA[item.baseKey];
                if (baseInfo?.sellPrice) {
                    const wt = avgWeight ? parseFloat(avgWeight) : 1.0;
                    const unitPrice = Math.ceil(baseInfo.sellPrice * wt * item.sellMultiplier * (gameState.rebirthMultiplier || 1.0));
                    ttDetail += ` | Sell: ${formatMoney(unitPrice)}💰 each`;
                }
            }
            if (isLocked) ttDetail += ' | 🔒 Locked';

            if (type === 'seeds') {
                const isSelected = gameState.selectedCropToPlant === item.key;
                return `<li data-item-key="${item.key}" data-inv-type="seeds" data-tt-name="${ttName}" data-tt-detail="${ttDetail}" class="${isSelected ? 'seed-selected' : ''}">
                    <span class="inv-tile-icon">${item.displayPrefix}${item.icon}</span><span class="inv-tile-name">${displayName}</span><span class="inv-tile-count">x${count}</span>
                </li>`;
            }

            let sellPriceHtml = '';
            const baseInfo = CROP_DATA[item.baseKey];
            if (baseInfo?.sellPrice) {
                const wt = avgWeight ? parseFloat(avgWeight) : 1.0;
                const unitPrice = Math.ceil(baseInfo.sellPrice * wt * item.sellMultiplier * (gameState.rebirthMultiplier || 1.0));
                sellPriceHtml = `<span class="inv-tile-sell">${formatMoney(unitPrice)}💰</span>`;
            }

            return `<li data-item-key="${item.key}" data-inv-type="produce" data-tt-name="${ttName}" data-tt-detail="${ttDetail}"${avgWeight ? ` data-tt-weight="${avgWeight}"` : ''}>
                ${isLocked ? '<span class="inv-tile-fav">🔒</span>' : ''}
                <span class="inv-tile-icon">${item.displayPrefix}${item.icon}</span>
                <span class="inv-tile-name">${displayName}</span>
                <span class="inv-tile-count">x${count}</span>
                ${sellPriceHtml}
            </li>`;
        }).join('');
    };

    const seedHtml = generateInventoryList(gameState.inventory.seeds, 'seeds');
    let gearHtml = Object.keys(GEAR_DATA).filter(k => (gameState.inventory.gears?.[k] || 0) > 0).map(k => {
        const gInfo = GEAR_DATA[k];
        const isSelected = selectedGearToPlace === k;
        return `<li class="gear-inv-item ${isSelected ? 'gear-selected' : ''}" data-gear-key="${k}" data-inv-type="gear" data-tt-name="${gInfo.name}" data-tt-detail="${gInfo.description}">
            <span class="inv-tile-icon">${gInfo.icon}</span><span class="inv-tile-name">${gInfo.name}</span><span class="inv-tile-count">x${gameState.inventory.gears[k]}</span>
        </li>`;
    }).join('');

    seedInventoryEl.innerHTML = [seedHtml, gearHtml].filter(Boolean).join('') || '<li class="empty-grid-msg">No seeds or gears yet.</li>';
    produceInventoryEl.innerHTML = generateInventoryList(gameState.inventory.produce, 'produce');
    applyInventorySearch();

    let anyPlotsReady = false; farmGridEl.innerHTML = '';
    for (let i = 0; i < MAX_PLOTS; i++) {
        const plotEl = document.createElement('div'); plotEl.classList.add('plot'); plotEl.dataset.plotId = i;
        const content = document.createElement('span'); content.classList.add('plot-content');
        if (i < gameState.totalPlots) {
            const p = gameState.plots[i]; plotEl.className = 'plot ' + p.state;
            const cropInfo = CROP_DATA[p.crop]; const specialStatuses = p.specialStatuses || [];
            if (p.state === 'growing' || p.state === 'ready') {
                if (specialStatuses.includes('moonlit')) plotEl.classList.add('plot-is-moonlit');
                if (specialStatuses.includes('scorched')) plotEl.classList.add('plot-is-scorched');
                if (specialStatuses.includes('golden') || specialStatuses.includes('pollinated')) plotEl.classList.add('plot-is-warm');
                if (specialStatuses.includes('frozen') || specialStatuses.includes('wet')) plotEl.classList.add('plot-is-cool');
                if (specialStatuses.includes('shocked')) plotEl.classList.add('plot-is-shocked');
                if (specialStatuses.includes('rainbow')) plotEl.classList.add('plot-is-rainbow');
                if (specialStatuses.includes('cosmic')) plotEl.classList.add('plot-is-cosmic');
                if (specialStatuses.includes('silver')) plotEl.classList.add('plot-is-silver');
                if (p.isLocked) plotEl.classList.add('plot-fruit-locked');
            }
            let iconPrefix = specialStatuses.map(s => SPECIAL_STATUSES[s]?.icon || '').join('');
            if (specialStatuses.length > 0) content.classList.add('status-icon-present');

            switch (p.state) {
                case 'empty':
                    content.innerHTML = '🟫';
                    plotEl.onclick = () => selectedGearToPlace ? placeGearOnPlot(i) : plantCrop(i);
                    plotEl.oncontextmenu = (e) => { e.preventDefault(); plantAllSelectedSeed(); };
                    break;
                case 'growing':
                    content.innerHTML = `${iconPrefix}${cropInfo?.icon || '?'}`;
                    const pBar = document.createElement('div'); pBar.className = 'progress-bar'; pBar.style.width = `${calculateGrowthProgress(p) * 100}%`; plotEl.appendChild(pBar);
                    plotEl.onclick = () => selectedGearToPlace ? placeGearOnPlot(i) : addMessage(`${cropInfo?.name || 'Crop'} is growing...`);
                    plotEl.oncontextmenu = (e) => { e.preventDefault(); togglePlotLock(i); };
                    break;
                case 'ready':
                    anyPlotsReady = true; content.innerHTML = `${iconPrefix}${cropInfo?.icon || '?'}`;
                    plotEl.onclick = () => selectedGearToPlace ? placeGearOnPlot(i) : harvestCrop(i);
                    plotEl.oncontextmenu = (e) => { e.preventDefault(); togglePlotLock(i); };
                    break;
            }
        } else { plotEl.classList.add('locked'); content.innerHTML = '🔒'; }
        plotEl.appendChild(content); farmGridEl.appendChild(plotEl);
    }
    harvestAllButtonEl.disabled = !anyPlotsReady;
    if (plantAllButtonEl) {
        const sel = gameState.selectedCropToPlant;
        plantAllButtonEl.disabled = !sel || !(gameState.inventory.seeds[sel] > 0) || !gameState.plots.some(p => p.state === 'empty');
    }

    const plantableOverall = getPlantableCropsSorted(false);
    buySeedsEl.innerHTML = plantableOverall.map(k => {
        const c = CROP_DATA[k]; if (!c || c.seedCost === null) return '';
        if (!isCropUnlockedForRebirth(k)) {
            const needRb = getMinRebirthsToBuyCrop(k);
            return `<li class="plant-button shop-seed-unavailable shop-seed-rebirth-locked"><span class="shop-tile-icon">${c.icon}</span><span class="shop-tile-name">🔒 ${c.name}</span><span class="shop-tile-stock">Rb${needRb}</span><span class="shop-tile-price">${formatMoney(c.seedCost)}💰</span></li>`;
        }
        const inRotation = gameState.shopCurrentlyAvailableSeedKeys.includes(k);
        const stockRemaining = gameState.shopSeedStock[k] ?? (inRotation ? Infinity : 0);
        if (!inRotation || stockRemaining <= 0) {
            return `<li class="plant-button shop-seed-unavailable"><span class="shop-tile-icon">${c.icon}</span><span class="shop-tile-name">${c.name}</span><span class="shop-tile-price">${formatMoney(c.seedCost)}💰</span></li>`;
        }
        return `<li class="plant-button ${gameState.money < c.seedCost ? 'disabled' : ''}" onclick="buySeeds('${k}',1)"><span class="shop-tile-icon">${c.icon}</span><span class="shop-tile-name">${c.name}</span><span class="shop-tile-stock">x${stockRemaining}</span><span class="shop-tile-price">${formatMoney(c.seedCost)}💰</span></li>`;
    }).join('');

    if (buyGearsEl) {
        buyGearsEl.innerHTML = Object.keys(GEAR_DATA).sort((a, b) => (GEAR_DATA[a].cost || 0) - (GEAR_DATA[b].cost || 0)).map(k => {
            const g = GEAR_DATA[k]; const inRotation = gameState.shopCurrentlyAvailableGearKeys?.includes(k);
            const stockRemaining = gameState.shopGearStock[k] ?? 0;
            if (!inRotation || stockRemaining <= 0) {
                return `<li class="plant-button shop-seed-unavailable"><span class="shop-tile-icon">${g.icon}</span><span class="shop-tile-name">${g.name}</span><span class="shop-tile-price">${formatMoney(g.cost)}💰</span></li>`;
            }
            return `<li class="plant-button ${gameState.money < g.cost ? 'disabled' : ''}" onclick="buyGear('${k}',1)"><span class="shop-tile-icon">${g.icon}</span><span class="shop-tile-name">${g.name}</span><span class="shop-tile-stock">x${stockRemaining}</span><span class="shop-tile-price">${formatMoney(g.cost)}💰</span></li>`;
        }).join('');
    }

    farmUpgradesContainerEl.innerHTML = '<h4>Upgrades:</h4>';
    const buyPlotBtn = document.createElement('button'), pCost = calculatePlotCost();
    buyPlotBtn.onclick = buyPlot; buyPlotBtn.disabled = gameState.totalPlots >= MAX_PLOTS || gameState.money < pCost;
    buyPlotBtn.innerHTML = gameState.totalPlots >= MAX_PLOTS ? `Max Plots (${MAX_PLOTS})` : `Buy Plot (${gameState.totalPlots}/${MAX_PLOTS}) - ${formatMoney(pCost)}💰`;
    farmUpgradesContainerEl.appendChild(buyPlotBtn);

    const upGrowthBtn = document.createElement('button'), gCost = calculateGrowthUpgradeCost(), cLevel = gameState.growthSpeedLevel;
    upGrowthBtn.onclick = buyGrowthUpgrade; upGrowthBtn.disabled = cLevel >= MAX_GROWTH_LEVELS || gameState.money < gCost;
    upGrowthBtn.innerHTML = cLevel >= MAX_GROWTH_LEVELS ? `Max Growth Speed (${cLevel}/${MAX_GROWTH_LEVELS})` : `Improve Growth (${cLevel}/${MAX_GROWTH_LEVELS}) - ${formatMoney(gCost)}💰`;
    farmUpgradesContainerEl.appendChild(upGrowthBtn);

    sellAllProduceButtonEl.disabled = !Object.entries(gameState.inventory.produce).some(([k, v]) => v.count > 0 && !v.isFavorited && parseItemKey(k).baseKey && CROP_DATA[parseItemKey(k).baseKey]?.sellPrice !== null);

    achievementsListEl.innerHTML = '';
    Object.keys(ACHIEVEMENT_DATA).sort((a, b) => a === 'complete_all' ? 1 : b === 'complete_all' ? -1 : ACHIEVEMENT_DATA[a].name.localeCompare(ACHIEVEMENT_DATA[b].name)).forEach(k => {
        const aD = ACHIEVEMENT_DATA[k], iC = gameState.achievements[k] === true, li = document.createElement('li');
        li.className = iC ? 'completed' : 'incomplete'; li.dataset.achKey = k;
        li.innerHTML = `<span class="ach-icon">${aD.icon}</span><div class="ach-details"><span class="ach-name">${aD.name}</span><span class="ach-desc">${aD.desc}</span></div>`;
        achievementsListEl.appendChild(li);
    });

    dailyQuestsSectionEl.style.display = 'block';
    dailyQuestsListEl.innerHTML = gameState.activeDailyQuests.map((quest, index) => {
        const questDef = QUEST_DEFINITIONS.find(qd => qd.id === quest.questId); if (!questDef) return '';
        const progressPercent = Math.min(100, (quest.progress / questDef.targetAmount) * 100);
        let liClass = quest.claimed ? "quest-claimed" : quest.completed ? "quest-completed" : "";
        let rewardStr = "Reward: " + (questDef.rewards.money ? `${questDef.rewards.money}💰 ` : '');
        if (questDef.rewards.seeds) rewardStr += Object.entries(questDef.rewards.seeds).map(([key, amt]) => `${amt} ${CROP_DATA[key]?.icon || key}`).join(', ');
        return `<li class="${liClass}"><span class="quest-title">${questDef.title}</span><span class="quest-desc">${questDef.description} (${quest.progress}/${questDef.targetAmount})</span><div class="quest-progress-bar-container"><div class="quest-progress-bar" style="width: ${progressPercent}%"></div></div><span class="quest-reward-text">${rewardStr}</span>${quest.completed && !quest.claimed ? `<button class="quest-claim-button" onclick="claimQuestReward(${index})">Claim</button>` : ''}${quest.claimed ? `<span>(Claimed)</span>` : ''}</li>`;
    }).join('') || '<li>No active quests.</li>';

    if (rebirthContentEl) {
        const rc = gameState.rebirthCount || 0, rm = gameState.rebirthMultiplier || 1.0, atMax = rc >= MAX_REBIRTHS, cost = Math.floor(REBIRTH_BASE_COST * REBIRTH_COST_MULTIPLIER * Math.pow(REBIRTH_COST_SCALE, rc));
        const gatedList = getRebirthGatedCropKeysAscending(), fruitsUnlocked = gatedList.filter(k => isCropUnlockedForRebirth(k)).length, nextLocked = gatedList.find(k => !isCropUnlockedForRebirth(k));
        let rebirthHTML = `<p class="rebirth-info">Rebirths: <strong>${rc}/${MAX_REBIRTHS}</strong> | Multiplier: <strong>${rm.toFixed(2)}x</strong> | Plots: <strong>${INITIAL_PLOTS + rc}</strong></p>`;
        rebirthHTML += `<p class="rebirth-info">Unlocked fruits: <strong>${fruitsUnlocked}/${REBIRTH_GATED_FRUIT_COUNT}</strong>${nextLocked ? ` (next at Rb ${getMinRebirthsToBuyCrop(nextLocked)})` : ''}</p>`;
        rebirthHTML += atMax ? `<button disabled>Max Rebirths</button>` : `<p class="rebirth-info">Cost: <strong>${formatMoney(cost)}💰</strong></p><button onclick="performRebirth()" ${gameState.money >= cost ? '' : 'disabled'}>🔄 Rebirth (${getRebirthMultiplier(rc + 1).toFixed(2)}x)</button>`;
        rebirthContentEl.innerHTML = rebirthHTML;
    }
};

// --- Game Actions ---
const selectCropToPlant = (key) => {
    if (!gameState) return;
    const { baseKey } = parseItemKey(key);
    if (CROP_DATA[baseKey]?.seedCost === null) return;
    if (gameState.selectedCropToPlant === key) gameState.selectedCropToPlant = null;
    else { selectedGearToPlace = null; gameState.selectedCropToPlant = key; }
    updateUI();
};

const plantCrop = (id) => {
    if (!gameState || id < 0 || id >= gameState.plots.length) return;
    const p = gameState.plots[id], invKey = gameState.selectedCropToPlant;
    if (!p || p.state !== 'empty' || !invKey || !(gameState.inventory.seeds[invKey] > 0)) return;
    const { baseKey, statusKeys } = parseItemKey(invKey), inf = CROP_DATA[baseKey];
    if (!inf || inf.seedCost === null) return;

    gameState.inventory.seeds[invKey]--;
    p.state = 'growing'; p.crop = baseKey; p.plantedTime = Date.now(); p.accruedGrowth = 0;
    p.growDuration = inf.growTime * calculateGrowthMultiplier();
    p.finalWeightMultiplier = getRandomWeight(inf.weightRange);
    p.specialStatuses = buildGrowingPlotMutations([...statusKeys]);
    gameState.stats.planted[baseKey] = (gameState.stats.planted[baseKey] || 0) + 1;

    updateQuestProgress('plant', 1, baseKey); updateQuestProgress('plant_any', 1);
    checkAllAchievements(); updateUI();
};

const plantAllSelectedSeed = () => {
    if (!gameState) return;
    const invKey = gameState.selectedCropToPlant; if (!invKey) return;
    let planted = 0;
    for (let i = 0; i < gameState.plots.length; i++) {
        if (gameState.plots[i].state === 'empty' && (gameState.inventory.seeds[invKey] > 0)) { plantCrop(i); planted++; }
    }
    if (planted > 0) { addMessage(`Planted ${planted} crops!`, 'success'); updateUI(); }
};

const harvestCrop = (id, isBulkHarvest = false) => {
    if (!gameState || id < 0 || id >= gameState.plots.length) return false;
    const p = gameState.plots[id]; if (!p || p.state !== 'ready') return false;

    const plantedKey = p.crop, plantedInfo = CROP_DATA[plantedKey], specialStatuses = p.specialStatuses || [];
    let actualHarvestKey = plantedKey, itemWeight = p.finalWeightMultiplier || 1.0;
    const inventoryKeyPrefix = specialStatuses.length > 0 ? specialStatuses.sort().join('_') + '_' : "";

    if (plantedInfo?.yields?.length > 0) {
        actualHarvestKey = plantedInfo.yields[Math.floor(Math.random() * plantedInfo.yields.length)];
        itemWeight = getRandomWeight(CROP_DATA[actualHarvestKey]?.weightRange);
    }

    if (actualHarvestKey && CROP_DATA[actualHarvestKey]?.sellPrice !== null) {
        const produceInvKey = `${inventoryKeyPrefix}${actualHarvestKey}`;
        if (!gameState.inventory.produce[produceInvKey]) gameState.inventory.produce[produceInvKey] = { count: 0, totalWeight: 0.0, isFavorited: false };
        gameState.inventory.produce[produceInvKey].count++;
        gameState.inventory.produce[produceInvKey].totalWeight += itemWeight;

        gameState.stats.harvested[actualHarvestKey] = (gameState.stats.harvested[actualHarvestKey] || 0) + 1;
        updateQuestProgress('harvest', 1, actualHarvestKey);
        if (specialStatuses.includes('golden')) updateQuestProgress('harvest_golden', 1);
    }

    p.state = 'empty'; p.crop = null; p.plantedTime = null; p.accruedGrowth = 0; p.specialStatuses = []; p.finalWeightMultiplier = null;
    if (!isBulkHarvest) { checkAllAchievements(); updateUI(); }
    return true;
};

const harvestAllReadyCrops = () => {
    if (!gameState) return;
    let count = 0;
    gameState.plots.forEach((p, i) => { if (p.state === 'ready' && !p.isLocked && harvestCrop(i, true)) count++; });
    if (count > 0) { addMessage(`Harvested ${count} crops!`, 'success'); checkAllAchievements(); updateUI(); }
};

const sellProduce = (key, qty = 1) => {
    if (!gameState || qty <= 0) return false;
    const itemData = gameState.inventory.produce[key]; if (!itemData || itemData.isFavorited || itemData.count < qty) return false;
    const { baseKey, sellMultiplier } = parseItemKey(key), baseInfo = CROP_DATA[baseKey];
    if (!baseInfo || baseInfo.sellPrice === null) return false;

    const avgWeight = itemData.count > 0 ? (itemData.totalWeight / itemData.count) : 1.0;
    const totalEarnings = Math.ceil(baseInfo.sellPrice * avgWeight * sellMultiplier * (gameState.rebirthMultiplier || 1.0) * qty);

    itemData.count -= qty; itemData.totalWeight -= (avgWeight * qty);
    if (itemData.count <= 0) { itemData.count = 0; itemData.totalWeight = 0.0; }

    gameState.money += totalEarnings;
    gameState.stats.totalMoneyEarned = (gameState.stats.totalMoneyEarned || 0) + totalEarnings;
    gameState.stats.hasSoldProduce = true;

    updateQuestProgress('earn_money', totalEarnings);
    updateQuestProgress('sell_produce_type', qty, baseKey);
    updateQuestProgress('sell_any_produce', qty);

    addMessage(`Sold ${qty} ${baseInfo.name} for ${totalEarnings}💰!`, 'success');
    checkAllAchievements(); updateUI();
    return true;
};

const sellAllProduce = () => {
    if (!gameState) return;
    Object.keys(gameState.inventory.produce).forEach(itemKey => {
        const item = gameState.inventory.produce[itemKey];
        if (item && item.count > 0 && !item.isFavorited) sellProduce(itemKey, item.count);
    });
    updateUI();
};

const buySeeds = (key, qty = 1) => {
    if (!gameState || qty <= 0) return;
    const info = CROP_DATA[key]; if (!info || info.seedCost === null || !isCropUnlockedForRebirth(key)) return;
    const available = gameState.shopSeedStock[key] ?? Infinity; if (available <= 0) return;

    let purchQty = qty;
    if (shopBuyQtyMode === 'max') purchQty = info.seedCost > 0 ? Math.min(available, Math.floor(gameState.money / info.seedCost)) : available;
    else if (shopBuyQtyMode === '20') purchQty = info.seedCost > 0 ? Math.min(20, available, Math.floor(gameState.money / info.seedCost)) : Math.min(20, available);

    if (purchQty < 1) return;
    const cost = info.seedCost * purchQty;
    if (gameState.money < cost) return;

    gameState.money -= cost;
    gameState.inventory.seeds[key] = (gameState.inventory.seeds[key] || 0) + purchQty;
    if (Number.isFinite(gameState.shopSeedStock[key])) gameState.shopSeedStock[key] -= purchQty;

    addMessage(`Bought ${purchQty} ${info.name} seeds!`, 'success');
    updateUI();
};

const buyGear = (key, qty = 1) => {
    if (!gameState || qty <= 0) return;
    const info = GEAR_DATA[key]; if (!info || !gameState.shopCurrentlyAvailableGearKeys?.includes(key)) return;
    const stockLeft = gameState.shopGearStock[key] ?? 0; if (stockLeft <= 0) return;

    let buyQty = qty;
    if (shopBuyQtyMode === 'max') buyQty = Math.min(stockLeft, Math.floor(gameState.money / info.cost));
    else if (shopBuyQtyMode === '20') buyQty = Math.min(20, stockLeft, Math.floor(gameState.money / info.cost));

    if (buyQty < 1) return;
    const cost = info.cost * buyQty;
    if (gameState.money < cost) return;

    gameState.money -= cost;
    gameState.shopGearStock[key] -= buyQty;
    if (!gameState.inventory.gears) gameState.inventory.gears = {};
    gameState.inventory.gears[key] = (gameState.inventory.gears[key] || 0) + buyQty;

    addMessage(`Bought ${buyQty} ${info.name}!`, 'success');
    updateUI();
};

const selectGearToPlace = (key) => {
    if (!gameState) return;
    if (selectedGearToPlace === key) selectedGearToPlace = null;
    else { selectedGearToPlace = key; gameState.selectedCropToPlant = null; }
    updateUI();
};

const placeGearOnPlot = (plotId) => {
    if (!gameState || !selectedGearToPlace || !(gameState.inventory.gears[selectedGearToPlace] > 0)) return false;
    const gearInfo = GEAR_DATA[selectedGearToPlace];
    if (gearInfo?.type === 'splash') {
        const eligible = gameState.plots.filter(p => (p.state === 'growing' || p.state === 'ready') && !p.specialStatuses.includes(gearInfo.splashStatus));
        if (eligible.length === 0) return false;
        shuffleArray(eligible).slice(0, gearInfo.splashCount).forEach(p => {
            p.specialStatuses.push(gearInfo.splashStatus); p.specialStatuses.sort();
        });
        gameState.inventory.gears[selectedGearToPlace]--;
        addMessage(`Applied ${gearInfo.name}!`, 'success');
        updateUI(); return true;
    }
    return false;
};

const buyPlot = () => {
    if (!gameState || gameState.totalPlots >= MAX_PLOTS) return;
    const cost = calculatePlotCost(); if (gameState.money < cost) return;
    gameState.money -= cost; gameState.totalPlots++;
    gameState.plots.push({ id: gameState.plots.length, state: 'empty', crop: null, plantedTime: null, growDuration: null, specialStatuses: [], finalWeightMultiplier: null, isLocked: false });
    checkAllAchievements(); updateUI();
};

const buyGrowthUpgrade = () => {
    if (!gameState || gameState.growthSpeedLevel >= MAX_GROWTH_LEVELS) return;
    const cost = calculateGrowthUpgradeCost(); if (gameState.money < cost) return;
    gameState.money -= cost; gameState.growthSpeedLevel++;
    checkAllAchievements(); updateUI();
};

const togglePlotLock = (id) => { if (gameState?.plots[id] && gameState.plots[id].state !== 'empty') { gameState.plots[id].isLocked = !gameState.plots[id].isLocked; updateUI(); } };

const toggleLockProduce = (itemKey) => {
    if (!gameState || !gameState.inventory.produce[itemKey]) return;
    const item = gameState.inventory.produce[itemKey];
    if (!item.isFavorited && Object.values(gameState.inventory.produce).filter(v => v?.isFavorited).length >= MAX_LOCKED_PRODUCE) return;
    item.isFavorited = !item.isFavorited; updateUI();
};

const performRebirth = () => {
    if (!gameState || gameState.rebirthCount >= MAX_REBIRTHS) return;
    const cost = Math.floor(REBIRTH_BASE_COST * REBIRTH_COST_MULTIPLIER * Math.pow(REBIRTH_COST_SCALE, gameState.rebirthCount));
    if (gameState.money < cost) return;

    if (!confirm(`Rebirth cost: ${formatMoney(cost)}💰. Reset farm for +1 starting plot & higher sell bonus?`)) return;

    gameState.rebirthCount++;
    gameState.rebirthMultiplier = getRebirthMultiplier(gameState.rebirthCount);
    const savedAch = { ...gameState.achievements }, savedCount = gameState.rebirthCount, savedMult = gameState.rebirthMultiplier, savedTips = [...gameState.shownTips], savedPromos = [...gameState.usedPromoCodes], savedName = gameState.farmName;

    gameState = createInitialGameState(false);
    gameState.achievements = savedAch; gameState.rebirthCount = savedCount; gameState.rebirthMultiplier = savedMult;
    gameState.shownTips = savedTips; gameState.usedPromoCodes = savedPromos; gameState.farmName = savedName;
    gameState.totalPlots = INITIAL_PLOTS + savedCount; gameState.plots = [];
    for (let i = 0; i < gameState.totalPlots; i++) gameState.plots.push({ id: i, state: 'empty', crop: null, plantedTime: null, growDuration: null, specialStatuses: [], finalWeightMultiplier: null, isLocked: false });
    gameState.inventory.seeds['wheat'] = 3;

    refreshShopStock(); generateNewDailyQuests(); checkAllAchievements(); updateUI();
};

// --- Shop & Quests Refresh ---
const getPlantableCropsSorted = (onlyUnlocked = false) => {
    let keys = Object.keys(CROP_DATA).filter(k => CROP_DATA[k].seedCost !== null).sort((a, b) => (CROP_DATA[a].seedCost ?? 0) - (CROP_DATA[b].seedCost ?? 0));
    return onlyUnlocked ? keys.filter(isCropUnlockedForRebirth) : keys;
};

const refreshShopStock = () => {
    if (!gameState) return;
    const plantable = getPlantableCropsSorted(true);
    let finalStock = plantable.slice(0, ALWAYS_AVAILABLE_SHOP_ITEMS);

    const ultraRares = shuffleArray(plantable.filter(k => CROP_DATA[k].rarity === 'ultra_rare')).slice(0, ULTRA_RARE_SLOTS_IN_SHOP);
    const rotating = shuffleArray(plantable.filter(k => !finalStock.includes(k) && !ultraRares.includes(k))).slice(0, NORMAL_RARE_ROTATING_SLOTS);

    gameState.shopCurrentlyAvailableSeedKeys = [...new Set([...finalStock, ...ultraRares, ...rotating])];
    gameState.shopSeedStock = {};
    gameState.shopCurrentlyAvailableSeedKeys.forEach(k => {
        const rarity = CROP_DATA[k]?.rarity || 'common';
        gameState.shopSeedStock[k] = Math.max(5, Math.round((SHOP_STOCK_LIMITS[rarity] ?? 80) * (0.9 + Math.random() * 0.2)));
    });

    gameState.shopCurrentlyAvailableGearKeys = Object.keys(GEAR_DATA);
    gameState.shopGearStock = {};
    gameState.shopCurrentlyAvailableGearKeys.forEach(k => gameState.shopGearStock[k] = getGearStockBaseLimit(k));

    gameState.shopNextRefreshTimestamp = Date.now() + getRandomDuration([SHOP_REFRESH_MIN, SHOP_REFRESH_MAX]);
    updateUI();
};

const checkAndResetDailyQuests = () => {
    if (!gameState || (!gameState.activeDailyQuests || gameState.activeDailyQuests.length === 0)) generateNewDailyQuests();
};

const generateNewDailyQuests = () => {
    if (!gameState) return;
    const pool = shuffleArray([...QUEST_DEFINITIONS]).slice(0, DAILY_QUEST_COUNT);
    gameState.activeDailyQuests = pool.map(q => ({ questId: q.id, progress: 0, completed: false, claimed: false }));
    gameState.lastQuestResetTimestamp = Date.now();
    updateUI();
};

const updateQuestProgress = (actionType, value, targetKey = null) => {
    if (!gameState || !gameState.activeDailyQuests) return;
    let updated = false;
    gameState.activeDailyQuests.forEach(quest => {
        if (quest.completed || quest.claimed) return;
        const qDef = QUEST_DEFINITIONS.find(qd => qd.id === quest.questId); if (!qDef) return;
        let match = false;
        if (qDef.type === actionType && (!qDef.targetCrop || qDef.targetCrop === targetKey)) match = true;
        if (match) {
            quest.progress = Math.min(qDef.targetAmount, quest.progress + value);
            if (quest.progress >= qDef.targetAmount) quest.completed = true;
            updated = true;
        }
    });
    if (updated) updateUI();
};

const claimQuestReward = (idx) => {
    if (!gameState || !gameState.activeDailyQuests[idx]) return;
    const quest = gameState.activeDailyQuests[idx], qDef = QUEST_DEFINITIONS.find(qd => qd.id === quest.questId);
    if (!qDef || !quest.completed || qDef.claimed) return;

    if (qDef.rewards.money) gameState.money += qDef.rewards.money;
    if (qDef.rewards.seeds) {
        Object.entries(qDef.rewards.seeds).forEach(([k, amt]) => {
            gameState.inventory.seeds[k] = (gameState.inventory.seeds[k] || 0) + amt;
        });
    }
    quest.claimed = true; addMessage(`Claimed ${qDef.title} reward!`, 'success'); updateUI();
};

const changeWeather = () => {
    if (!gameState) return;
    const keys = WEATHER_TYPE_KEYS.filter(w => w !== gameState.currentWeather && !WEATHER_COMMAND_ONLY_KEYS.includes(w));
    gameState.currentWeather = keys[Math.floor(Math.random() * keys.length)];
    gameState.weatherChangeTimestamp = Date.now() + getRandomDuration(WEATHER_CONFIG[gameState.currentWeather].duration_ms);
    addMessage(`Weather is now ${WEATHER_CONFIG[gameState.currentWeather].name}!`, 'info');
    updateUI();
};

const calculateGrowthProgress = (p) => {
    if (p?.state !== 'growing' || !p.growDuration || p.growDuration <= 0) return 0;
    const accrued = typeof p.accruedGrowth === 'number' && !isNaN(p.accruedGrowth) ? p.accruedGrowth : 0;
    return Math.min(1, Math.max(0, accrued / p.growDuration));
};

const updateProgressBars = () => {
    farmGridEl?.querySelectorAll('.plot.growing .progress-bar').forEach(bar => {
        const plotId = parseInt(bar.closest('.plot')?.dataset.plotId, 10);
        if (!isNaN(plotId) && gameState?.plots[plotId]) {
            bar.style.width = `${calculateGrowthProgress(gameState.plots[plotId]) * 100}%`;
        }
    });
    updateActiveTooltip();
};

const gameLoop = () => {
    if (!gameState) return;
    const now = Date.now(), deltaMs = now - (gameState.lastUpdate || now);
    let needsUpdate = false;

    if (now >= gameState.weatherChangeTimestamp) { changeWeather(); needsUpdate = true; }

    gameState.plots.forEach(p => {
        if (p.state === 'growing' && p.growDuration) {
            const environmentalSpeedBoost = (gameState.currentWeather === 'gentle_rain' && WEATHER_CONFIG.gentle_rain.growthModifier) ? WEATHER_CONFIG.gentle_rain.growthModifier : 1.0;
            if (typeof p.accruedGrowth !== 'number' || isNaN(p.accruedGrowth)) p.accruedGrowth = 0;
            p.accruedGrowth += deltaMs * environmentalSpeedBoost;

            if (p.specialStatuses.length < 2 && Math.random() < 0.0008) {
                const current = [...p.specialStatuses], potential = buildGrowingPlotMutations(current);
                if (potential.length > current.length) { p.specialStatuses = potential; needsUpdate = true; }
            }

            if (p.accruedGrowth >= p.growDuration) { p.state = 'ready'; p.plantedTime = null; needsUpdate = true; }
        }
    });
    gameState.lastUpdate = now;

    if (shopRefreshTimerEl) {
        shopRefreshTimerEl.textContent = `(Refreshes in: ${formatTime(Math.max(0, gameState.shopNextRefreshTimestamp - now))})`;
    }
    if (now >= gameState.shopNextRefreshTimestamp) { refreshShopStock(); needsUpdate = true; }

    checkAndResetDailyQuests();
    if (needsUpdate) updateUI(); else updateProgressBars();
};

const checkAndGrantAchievement = (key) => {
    if (!gameState || !ACHIEVEMENT_DATA[key] || gameState.achievements[key]) return;
    const ach = ACHIEVEMENT_DATA[key]; let met = false;
    if (ach.type === 'stats.h') met = (gameState.stats.harvested[ach.tgt] || 0) >= ach.thr;
    else if (ach.type === 'stats.m') met = (gameState.stats.totalMoneyEarned || 0) >= ach.thr;
    else if (ach.type === 'state.p') met = gameState.totalPlots >= ach.thr;
    else if (ach.type === 'state.rb') met = gameState.rebirthCount >= ach.thr;
    else if (ach.type === 'state.g') met = gameState.growthSpeedLevel >= ach.thr;
    else if (ach.type === 'all') met = Object.keys(ACHIEVEMENT_DATA).every(k => k === key || k === 'complete_all' || gameState.achievements[k]);

    if (met) {
        gameState.achievements[key] = true;
        if (ach.rwd > 0) gameState.money += ach.rwd;
        addMessage(`🏆 Achievement: ${ach.name}!`, 'gold', true);
        updateUI();
    }
};
const checkAllAchievements = () => { if (gameState) Object.keys(ACHIEVEMENT_DATA).forEach(checkAndGrantAchievement); };

// --- Modals, Settings & Promo ---
const setPromoCodeFeedback = (msg, kind) => {
    const el = document.getElementById('promo-code-feedback'); if (!el) return;
    el.textContent = msg || ''; el.className = 'promo-code-feedback' + (kind ? ` promo-code-feedback--${kind}` : '');
};

const redeemPromoCode = () => {
    if (!gameState) return;
    const input = document.getElementById('promo-code-input'); if (!input) return;
    const codeNorm = normalizePromoCode(input.value);
    if (!codeNorm) { setPromoCodeFeedback('Enter a promo code.', 'error'); return; }
    mergePromoCodesIntoGameState();
    if (gameState.usedPromoCodes.includes(codeNorm)) { setPromoCodeFeedback('Already redeemed.', 'error'); return; }

    const handler = PROMO_REWARDS[codeNorm];
    if (!handler) { setPromoCodeFeedback('Invalid promo code.', 'error'); return; }

    handler(gameState); rememberPromoCodeUsed(codeNorm); input.value = '';
    setPromoCodeFeedback(''); updateUI(); saveGame(true); closeSettingsPopup();
};

const openSettingsPopup = () => {
    setPromoCodeFeedback('');
    document.getElementById('settings-modal-backdrop')?.classList.add('active');
    const lbRow = document.getElementById('settings-leaderboard-row');
    if (lbRow) lbRow.style.display = hasLeaderboardOnlineConsent() ? '' : 'none';
};
const closeSettingsPopup = () => document.getElementById('settings-modal-backdrop')?.classList.remove('active');

const renderUpdateLogDetails = (id) => {
    const entry = UPDATE_LOG_ENTRIES.find(e => e.id === id) || UPDATE_LOG_ENTRIES[0]; if (!entry) return;
    updateLogListEl?.querySelectorAll('.update-log-entry-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.updateId === entry.id));
    if (updateLogDetailEl) updateLogDetailEl.innerHTML = `<h3>${entry.title}</h3><ul>${entry.changes.map(c => `<li>${c}</li>`).join('')}</ul>`;
};

const openUpdateLogPopup = () => {
    if (!updateLogListEl) return;
    updateLogListEl.innerHTML = UPDATE_LOG_ENTRIES.map(e => `<button type="button" class="update-log-entry-btn" data-update-id="${e.id}" onclick="renderUpdateLogDetails('${e.id}')">${e.title}</button>`).join('');
    renderUpdateLogDetails(UPDATE_LOG_ENTRIES[0].id);
    updateLogBackdropEl?.classList.add('active');
};
const closeUpdateLogPopup = () => updateLogBackdropEl?.classList.remove('active');

const applyFarmName = () => {
    const input = document.getElementById('farm-name-input');
    if (gameState && input) { gameState.farmName = input.value.trim().slice(0, 32) || 'Your Farm'; updateUI(); saveGame(true); }
};

const applyKeybinds = () => {
    if (!gameState) return;
    gameState.keybinds = {
        plantAll: (document.getElementById('keybind-plant-all')?.value || '1').toLowerCase().slice(0, 1),
        harvestAll: (document.getElementById('keybind-harvest-all')?.value || '2').toLowerCase().slice(0, 1),
        sellAll: (document.getElementById('keybind-sell-all')?.value || '3').toLowerCase().slice(0, 1)
    };
    saveGame(true);
};

const eraseAllProgress = () => {
    if (confirm("Erase ALL progress?") && confirm("Are you completely sure?")) {
        localStorage.clear(); initializeNewGame(); saveGame(true);
    }
};

// --- Leaderboard & Remote Server Connection ---
const getOrCreateWebAppClientId = () => {
    let id = localStorage.getItem(GS_CLIENT_ID_STORAGE_KEY);
    if (!id) {
        id = 'wf-' + Date.now() + '-' + Math.random().toString(36).slice(2, 10);
        localStorage.setItem(GS_CLIENT_ID_STORAGE_KEY, id);
    }
    return id;
};

const computeFarmNetWorth = () => {
    if (!gameState) return 0;
    let v = Math.max(0, gameState.money || 0);
    const rb = gameState.rebirthMultiplier || 1;
    Object.entries(gameState.inventory.produce || {}).forEach(([key, item]) => {
        if (!item || item.count <= 0) return;
        const { baseKey, sellMultiplier } = parseItemKey(key);
        const baseInfo = CROP_DATA[baseKey];
        if (!baseInfo || baseInfo.sellPrice === null) return;
        const avgWeight = item.count > 0 ? item.totalWeight / item.count : 1;
        v += Math.ceil(baseInfo.sellPrice * avgWeight * sellMultiplier * rb) * item.count;
    });
    v += (gameState.rebirthCount || 0) * 1e14;
    return Math.floor(v);
};

const webAppJsonp = (paramsObj) => new Promise((resolve) => {
    if (!GS_COMMANDS_WEBAPP_URL) return resolve(null);
    const cbName = `wfGas_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const params = new URLSearchParams(paramsObj);
    params.set('callback', cbName);
    params.set('_', Date.now().toString());

    const script = document.createElement('script');
    let settled = false;
    const finish = (data) => {
        if (settled) return; settled = true;
        clearTimeout(to);
        try { delete window[cbName]; } catch (e) { }
        if (script.parentNode) script.parentNode.removeChild(script);
        resolve(data);
    };
    const to = setTimeout(() => finish(null), 15000);
    window[cbName] = finish;
    script.onerror = () => finish(null);
    script.src = `${GS_COMMANDS_WEBAPP_URL}?${params.toString()}`;
    document.head.appendChild(script);
});

const fetchLeaderboardJsonGet = async (paramsObj) => {
    if (!GS_COMMANDS_WEBAPP_URL) return null;
    try {
        const params = new URLSearchParams(paramsObj);
        params.set('_', Date.now().toString());
        const resp = await fetch(`${GS_COMMANDS_WEBAPP_URL}?${params.toString()}`, { mode: 'cors', cache: 'no-store' });
        const data = await resp.json();
        return data;
    } catch (e) { return null; }
};

const leaderboardRequestJsonpThenGet = async (params) => (await webAppJsonp(params)) || (await fetchLeaderboardJsonGet(params));

const submitLeaderboardScore = async () => {
    if (!GS_COMMANDS_WEBAPP_URL || !gameState || !hasLeaderboardOnlineConsent() || lbSubmitInFlight) return;
    lbSubmitInFlight = true;
    try {
        await leaderboardRequestJsonpThenGet({
            action: 'submitScore',
            clientId: getOrCreateWebAppClientId(),
            farmName: gameState.farmName || 'Your Farm',
            money: String(Math.floor(gameState.money || 0)),
            netWorth: String(computeFarmNetWorth()),
            rebirths: String(gameState.rebirthCount || 0),
            growthLevel: String(gameState.growthSpeedLevel || 0)
        });
    } catch (e) { } finally { lbSubmitInFlight = false; }
};

const startLeaderboardSubmitPolling = () => {
    if (!GS_COMMANDS_WEBAPP_URL || !hasLeaderboardOnlineConsent()) return;
    if (leaderboardSubmitInterval) clearInterval(leaderboardSubmitInterval);
    submitLeaderboardScore();
    leaderboardSubmitInterval = setInterval(submitLeaderboardScore, GS_LEADERBOARD_SUBMIT_INTERVAL_MS);
};

const sortLeaderboardEntries = (entries) => {
    if (!Array.isArray(entries)) return [];
    return entries.filter(e => {
        if (!e) return false;
        const m = String(e.money || '').toLowerCase(), nw = String(e.netWorth || '').toLowerCase();
        return !m.includes('e') && !m.includes('nan') && !nw.includes('e') && !nw.includes('nan');
    }).sort((a, b) => (Number(b.rebirths) || 0) - (Number(a.rebirths) || 0) || (Number(b.netWorth) || 0) - (Number(a.netWorth) || 0));
};

const renderLeaderboardRows = (entries) => {
    if (!leaderboardContentEl) return;
    if (!entries.length) {
        leaderboardContentEl.innerHTML = '<p class="leaderboard-empty">No scores found yet.</p>';
        return;
    }
    const rows = entries.map((e, i) => `<tr>
        <td>${i + 1}</td>
        <td>${String(e.farmName || 'Farm').replace(/</g, '&lt;')}</td>
        <td class="leaderboard-num">${formatMoney(Number(e.money) || 0)}</td>
        <td class="leaderboard-num">${formatMoney(Number(e.netWorth) || 0)}</td>
        <td class="leaderboard-num">${e.rebirths || 0}</td>
        <td class="leaderboard-num">${(Number(e.growthLevel) || 0) >= MAX_GROWTH_LEVELS ? 'Max' : (e.growthLevel || 0)}</td>
    </tr>`).join('');
    leaderboardContentEl.innerHTML = `<div class="leaderboard-table-wrap"><table class="leaderboard-table"><thead><tr><th>#</th><th>Farm</th><th>Money</th><th>Value</th><th>Rebirths</th><th>Growth</th></tr></thead><tbody>${rows}</tbody></table></div>`;
};

const loadLeaderboardIntoModal = async () => {
    if (!leaderboardContentEl) return;
    leaderboardContentEl.innerHTML = '<p class="leaderboard-loading">Loading rankings...</p>';
    const data = await leaderboardRequestJsonpThenGet({ action: 'leaderboard' });
    if (data?.ok && Array.isArray(data.entries)) {
        renderLeaderboardRows(sortLeaderboardEntries(data.entries));
    } else {
        leaderboardContentEl.innerHTML = '<p class="leaderboard-empty">Unable to connect to leaderboard server.</p>';
    }
};

const openLeaderboardPopup = () => {
    if (!leaderboardBackdropEl) return;
    leaderboardBackdropEl.classList.add('active');
    if (!hasLeaderboardOnlineConsent()) {
        leaderboardContentEl.innerHTML = `<div class="leaderboard-consent">
            <p class="leaderboard-consent-title">Join Public Leaderboard</p>
            <p class="leaderboard-consent-text">Accept to sync your farm name, net worth, and rebirths to the global board.</p>
            <div class="leaderboard-consent-actions">
                <button type="button" class="leaderboard-consent-btn leaderboard-consent-accept" id="lb-accept">Accept & Join</button>
                <button type="button" class="leaderboard-consent-btn leaderboard-consent-decline" id="lb-decline">Cancel</button>
            </div>
        </div>`;
        document.getElementById('lb-accept')?.addEventListener('click', () => {
            localStorage.setItem(LEADERBOARD_ONLINE_CONSENT_KEY, '1');
            startLeaderboardSubmitPolling(); loadLeaderboardIntoModal();
        });
        document.getElementById('lb-decline')?.addEventListener('click', closeLeaderboardPopup);
        return;
    }
    submitLeaderboardScore(); loadLeaderboardIntoModal();
};

const closeLeaderboardPopup = () => leaderboardBackdropEl?.classList.remove('active');

const leaveLeaderboardOnlinePlay = async () => {
    const clientId = getOrCreateWebAppClientId();
    localStorage.removeItem(LEADERBOARD_ONLINE_CONSENT_KEY);
    if (leaderboardSubmitInterval) clearInterval(leaderboardSubmitInterval);
    await leaderboardRequestJsonpThenGet({ action: 'removeScore', clientId });
    closeLeaderboardPopup();
    addMessage('Left online leaderboard.', 'info');
};

const pollGoogleSheetCommands = async () => {
    if (!GS_COMMANDS_WEBAPP_URL || !gameState) return;
    try {
        const resp = await fetch(`${GS_COMMANDS_WEBAPP_URL}?t=${Date.now()}`);
        if (!resp.ok) return;
        const payload = await resp.json();
        const rows = Array.isArray(payload?.commands) ? payload.commands : [];
        let processed = new Set(JSON.parse(localStorage.getItem(GS_COMMANDS_PROCESSED_IDS_STORAGE_KEY) || '[]'));
        for (const row of rows) {
            const id = String(row.id || '').trim();
            if (!id || processed.has(id)) continue;
            if (row.command) executeAdminCommandText(row.command, 'sheet');
            processed.add(id);
        }
        localStorage.setItem(GS_COMMANDS_PROCESSED_IDS_STORAGE_KEY, JSON.stringify(Array.from(processed).slice(-1000)));
    } catch (e) { }
};

const startGoogleSheetCommandPolling = () => {
    if (!GS_COMMANDS_WEBAPP_URL) return;
    if (sheetCommandPollInterval) clearInterval(sheetCommandPollInterval);
    pollGoogleSheetCommands();
    sheetCommandPollInterval = setInterval(pollGoogleSheetCommands, GS_COMMANDS_POLL_INTERVAL_MS);
};

// --- Complete Dev / Admin Commands Suite ---
const executeAdminCommandText = (rawText, source = 'console') => {
    if (!gameState || !rawText || !rawText.startsWith('/')) return false;
    const parts = rawText.substring(1).trim().split(/\s+/);
    const cmd = (parts[0] || '').toLowerCase();
    const params = parts.slice(1);
    let needsUI = false;

    try {
        switch (cmd) {
            case 'addmoney': {
                const amt = parseInt(params[0], 10);
                if (!isNaN(amt) && amt >= 0) { gameState.money += amt; needsUI = true; broadcastAdminNotice(`+${formatMoney(amt)} Money`, 'action'); }
                else addMessage("Usage: /addmoney [amount]", 'error');
            } break;

            case 'say': {
                const msg = params.join(' ').trim();
                if (!msg) addMessage("Usage: /say [text]", 'error');
                else broadcastAdminNotice(msg, 'chat');
            } break;

            case 'give': {
                if (params.length < 1) { addMessage("Usage: /give [status...] [produce_key] [amount]", 'error'); break; }
                const maybeAmount = parseInt(params[params.length - 1], 10);
                const hasAmount = !isNaN(maybeAmount) && maybeAmount > 0;
                const giveAmount = hasAmount ? maybeAmount : 1;
                const itemIndex = hasAmount ? params.length - 2 : params.length - 1;
                if (itemIndex < 0) { addMessage("Usage: /give [status...] [produce_key] [amount]", 'error'); break; }
                const itemKey = params[itemIndex].toLowerCase();
                const specialGiveStatuses = params.slice(0, itemIndex).map(s => s.toLowerCase());
                const invalidStatuses = specialGiveStatuses.filter(s => !SPECIAL_STATUSES[s]);
                if (invalidStatuses.length > 0) { addMessage(`Invalid status(es): ${invalidStatuses.join(', ')}.`, 'error'); break; }
                const baseInfo = CROP_DATA[itemKey];
                if (!baseInfo) { addMessage(`Invalid item '${itemKey}'.`, 'error'); break; }
                if (baseInfo.sellPrice === null) { addMessage(`'${itemKey}' cannot be given as produce. Use /giveseed for seeds.`, 'error'); break; }
                specialGiveStatuses.sort();
                const targetInvKey = specialGiveStatuses.length > 0 ? specialGiveStatuses.join('_') + '_' + itemKey : itemKey;
                if (!gameState.inventory.produce[targetInvKey]) gameState.inventory.produce[targetInvKey] = { count: 0, totalWeight: 0.0, isFavorited: false };
                gameState.inventory.produce[targetInvKey].count += giveAmount;
                const itemWeightRange = baseInfo.weightRange || [1.0, 1.0];
                const avgItemWeight = (itemWeightRange[0] + itemWeightRange[1]) / 2;
                gameState.inventory.produce[targetInvKey].totalWeight += giveAmount * avgItemWeight;
                const statusLabels = specialGiveStatuses.map(s => SPECIAL_STATUSES[s]?.name || s).join(' ');
                const label = statusLabels ? `${statusLabels} ${baseInfo.name}` : baseInfo.name;
                broadcastAdminNotice(`Received ${giveAmount} ${label}`, 'action');
                needsUI = true;
            } break;

            case 'giveseed':
            case 'addseed': {
                const key = (params[0] || '').toLowerCase();
                const amt = !isNaN(parseInt(params[1], 10)) && parseInt(params[1], 10) > 0 ? parseInt(params[1], 10) : 1;
                if (!CROP_DATA[key] || CROP_DATA[key].seedCost === null) { addMessage("Usage: /giveseed [seed_key] [amount]", 'error'); break; }
                gameState.inventory.seeds[key] = (gameState.inventory.seeds[key] || 0) + amt;
                needsUI = true;
                broadcastAdminNotice(`Received ${amt} ${CROP_DATA[key].name} ${amt === 1 ? 'Seed' : 'Seeds'}`, 'action');
            } break;

            case 'addgear': {
                const key = (params[0] || '').toLowerCase(); const amt = parseInt(params[1], 10) || 1;
                if (!GEAR_DATA[key]) { addMessage("Usage: /addgear [gear_key] [amount]", 'error'); break; }
                if (!gameState.inventory.gears) gameState.inventory.gears = {};
                gameState.inventory.gears[key] = (gameState.inventory.gears[key] || 0) + amt;
                broadcastAdminNotice(`Received ${amt} ${GEAR_DATA[key].name}`, 'action');
                needsUI = true;
            } break;

            case 'grow': {
                const itemKey = params[0]?.toLowerCase(); if (!itemKey) { addMessage("Usage: /grow [crop_key]", 'error'); break; }
                let grown = false; gameState.plots.forEach(p => { if (p.state === 'growing' && p.crop === itemKey) { p.state = 'ready'; p.plantedTime = null; p.accruedGrowth = p.growDuration; grown = true; } });
                const cropLabel = CROP_DATA[itemKey]?.name || itemKey;
                if (grown) broadcastAdminNotice(`Grew ${cropLabel}`, 'action');
                else addMessage(`No growing ${cropLabel}.`, 'error');
                needsUI = grown;
            } break;

            case 'growall': {
                let count = 0; gameState.plots.forEach(p => { if (p.state === 'growing') { p.state = 'ready'; p.plantedTime = null; p.accruedGrowth = p.growDuration; count++; } });
                if (count > 0) { broadcastAdminNotice(`Grew all ${count} crops`, 'action'); needsUI = true; }
                else addMessage('No plots growing.', 'info');
            } break;

            case 'weather': {
                const targetW = params[0]?.toLowerCase();
                if (targetW && WEATHER_CONFIG[targetW]) {
                    gameState.currentWeather = targetW;
                    gameState.weatherChangeTimestamp = Date.now() + getRandomDuration(WEATHER_CONFIG[targetW].duration_ms);
                    broadcastAdminNotice(`Weather set to ${WEATHER_CONFIG[targetW].name}`, 'action');
                    needsUI = true;
                } else addMessage(`Usage: /weather [${Object.keys(WEATHER_CONFIG).join('|')}]`, 'error');
            } break;

            case 'refreshshop': {
                if (gameState) {
                    gameState.shopNextRefreshTimestamp = Date.now();
                    refreshShopStock();
                    broadcastAdminNotice('Shop refreshed', 'action');
                    needsUI = true;
                }
            } break;

            case 'stock': {
                const key = (params[0] || '').toLowerCase();
                const amt = !isNaN(parseInt(params[1], 10)) ? parseInt(params[1], 10) : 1;
                if (!CROP_DATA[key] || CROP_DATA[key].seedCost === null) { addMessage("Usage: /stock [seed_key] [amount]", 'error'); break; }
                if (!gameState.shopSeedStock) gameState.shopSeedStock = {};
                if (!Array.isArray(gameState.shopCurrentlyAvailableSeedKeys)) gameState.shopCurrentlyAvailableSeedKeys = [];
                gameState.shopSeedStock[key] = amt;
                if (amt > 0 && !gameState.shopCurrentlyAvailableSeedKeys.includes(key)) gameState.shopCurrentlyAvailableSeedKeys.push(key);
                if (amt <= 0) gameState.shopCurrentlyAvailableSeedKeys = gameState.shopCurrentlyAvailableSeedKeys.filter(k => k !== key);
                broadcastAdminNotice(`Stocked ${CROP_DATA[key].name} x${amt}`, 'action');
                needsUI = true;
            } break;

            case 'setstock': {
                const type = (params[0] || '').toLowerCase(), key = (params[1] || '').toLowerCase(), amt = parseInt(params[2], 10);
                if (isNaN(amt) || amt < 0) { addMessage("Usage: /setstock [seed|gear] [key] [amount]", 'error'); break; }
                if (type === 'seed' && CROP_DATA[key] && CROP_DATA[key].seedCost !== null) {
                    if (!gameState.shopSeedStock) gameState.shopSeedStock = {};
                    if (!Array.isArray(gameState.shopCurrentlyAvailableSeedKeys)) gameState.shopCurrentlyAvailableSeedKeys = [];
                    gameState.shopSeedStock[key] = amt;
                    if (amt > 0 && !gameState.shopCurrentlyAvailableSeedKeys.includes(key)) gameState.shopCurrentlyAvailableSeedKeys.push(key);
                    if (amt <= 0) gameState.shopCurrentlyAvailableSeedKeys = gameState.shopCurrentlyAvailableSeedKeys.filter(k => k !== key);
                    broadcastAdminNotice(`Stocked ${CROP_DATA[key].name} x${amt}`, 'action');
                    needsUI = true;
                } else if (type === 'gear' && GEAR_DATA[key]) {
                    if (!gameState.shopGearStock) gameState.shopGearStock = {};
                    if (!Array.isArray(gameState.shopCurrentlyAvailableGearKeys)) gameState.shopCurrentlyAvailableGearKeys = [];
                    gameState.shopGearStock[key] = amt;
                    if (amt > 0 && !gameState.shopCurrentlyAvailableGearKeys.includes(key)) gameState.shopCurrentlyAvailableGearKeys.push(key);
                    if (amt <= 0) gameState.shopCurrentlyAvailableGearKeys = gameState.shopCurrentlyAvailableGearKeys.filter(k => k !== key);
                    broadcastAdminNotice(`Stocked ${GEAR_DATA[key].name} x${amt}`, 'action');
                    needsUI = true;
                } else addMessage("Usage: /setstock [seed|gear] [key] [amount]", 'error');
            } break;

            case 'achieve':
            case 'achievement': {
                const key = params[0]?.toLowerCase();
                if (key === 'all' || key === '*') {
                    let uC = 0; Object.keys(ACHIEVEMENT_DATA).forEach(k => { if (!gameState.achievements[k]) { gameState.achievements[k] = true; uC++; } });
                    broadcastAdminNotice(`Unlocked ${uC} achievements`, 'action'); needsUI = true;
                } else if (ACHIEVEMENT_DATA[key]) {
                    if (!gameState.achievements[key]) { gameState.achievements[key] = true; broadcastAdminNotice(`Unlocked ${ACHIEVEMENT_DATA[key].name}`, 'action'); needsUI = true; }
                    else addMessage(`Ach '${key}' already unlocked.`, 'info');
                } else addMessage(`Unknown ach key '${key}'. /achieve [key|all]`, 'error');
            } break;

            case 'resetquests': { generateNewDailyQuests(); broadcastAdminNotice('Daily quests reset', 'action'); needsUI = true; } break;

            case 'completequests': {
                if (gameState.activeDailyQuests) {
                    gameState.activeDailyQuests.forEach(q => { const qDef = QUEST_DEFINITIONS.find(d => d.id === q.questId); if (qDef) q.progress = qDef.targetAmount; q.completed = true; });
                    broadcastAdminNotice('All active quests complete', 'action'); needsUI = true;
                }
            } break;

            case 'rebirthset': {
                const target = parseInt(params[0], 10);
                if (isNaN(target) || target < 0 || target > MAX_REBIRTHS) { addMessage(`Usage: /rebirthset [0-${MAX_REBIRTHS}]`, 'error'); break; }
                gameState.rebirthCount = target;
                gameState.rebirthMultiplier = getRebirthMultiplier(target);
                broadcastAdminNotice(`Rebirth set to ${target}`, 'action');
                needsUI = true;
            } break;

            case 'resetconsole': {
                try {
                    localStorage.removeItem(GS_COMMANDS_PROCESSED_IDS_STORAGE_KEY);
                    localStorage.removeItem(GS_COMMANDS_LAST_RECEIVED_AT_STORAGE_KEY);
                } catch (e) { }
                broadcastAdminNotice('Sheet command ID cache reset', 'action');
            } break;

            case 'help': {
                const helpText = ["--- Dev Commands ---", "/addmoney [amt]", "/say [text]", "/give [status...] [produce] [amt=1]", "/giveseed [seed] [amt=1]", "/addseed [seed] [amt]", "/addgear [gear] [amt]", "/grow [crop]", "/growall", "/weather [key]", "/refreshshop", "/stock [seed] [amt=1]", "/setstock [seed|gear] [key] [amt]", "/achieve [key|all]", "/resetquests", "/completequests", `/rebirthset [0-${MAX_REBIRTHS}]`, "/resetconsole", "/help"].join('\n');
                broadcastAdminNotice(helpText, 'action', 14000, true);
            } break;

            default: addMessage(`Unknown cmd: /${cmd}. /help for options.`, 'error'); break;
        }
    } catch (e) {
        console.error("Dev Command Error:", rawText, e); AddMessage(`Dev Error /${cmd}.`, 'error');
    }

    if (source === 'console' && devCommandInputEl) devCommandInputEl.value = '';
    if (needsUI) { updateUI(); checkAllAchievements(); }
    return true;
};

// --- Save & Load Engine ---
const createInitialGameState = (resetCrops = true) => {
    if (resetCrops) CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA));
    const state = {
        v: SAVE_CODE_VERSION, money: 100, plots: [], inventory: { seeds: {}, produce: {}, gears: {} }, achievements: {},
        stats: { harvested: {}, planted: {}, totalMoneyEarned: 0, hasSoldProduce: false, mutationsHarvested: {} }, selectedCropToPlant: null,
        totalPlots: INITIAL_PLOTS, growthSpeedLevel: 0, shownTips: [], lastUpdate: Date.now(), shopNextRefreshTimestamp: 0,
        shopCurrentlyAvailableSeedKeys: [], shopCurrentlyAvailableGearKeys: [], activeDailyQuests: [], lastQuestResetTimestamp: 0,
        currentWeather: 'sunny', weatherChangeTimestamp: Date.now() + 120000, rebirthCount: 0, rebirthMultiplier: 1.0,
        shopSeedStock: {}, shopGearStock: {}, usedPromoCodes: [], farmName: 'Your Farm', keybinds: { plantAll: '1', harvestAll: '2', sellAll: '3' }
    };
    for (let i = 0; i < state.totalPlots; i++) state.plots.push({ id: i, state: 'empty', crop: null, plantedTime: null, growDuration: null, specialStatuses: [], finalWeightMultiplier: null, isLocked: false });
    Object.keys(GEAR_DATA).forEach(k => state.inventory.gears[k] = 0);
    Object.keys(CROP_DATA).forEach(k => { if (CROP_DATA[k].seedCost !== null) state.inventory.seeds[k] = 0; });
    return state;
};

const saveGame = (isAuto = false) => {
    if (!gameState) return;
    try {
        const plotsToSave = gameState.plots.map(p => ({ s: p.state, c: p.crop, gd: p.growDuration, sss: p.specialStatuses, fw: p.finalWeightMultiplier, lk: p.isLocked, ag: p.accruedGrowth || 0 }));
        const payload = {
            v: SAVE_CODE_VERSION, m: gameState.money, p: plotsToSave, inv: gameState.inventory, tp: gameState.totalPlots, gsl: gameState.growthSpeedLevel, ach: gameState.achievements, st: gameState.stats,
            tips: gameState.shownTips, lu: Date.now(), sNRT: gameState.shopNextRefreshTimestamp, sCASK: gameState.shopCurrentlyAvailableSeedKeys, sCAGK: gameState.shopCurrentlyAvailableGearKeys,
            sSS: gameState.shopSeedStock, sGS: gameState.shopGearStock, activeDailyQuests: gameState.activeDailyQuests, lastQuestResetTimestamp: gameState.lastQuestResetTimestamp, cw: gameState.currentWeather,
            wcts: gameState.weatherChangeTimestamp, rbc: gameState.rebirthCount, rbm: gameState.rebirthMultiplier, usedPromoCodes: gameState.usedPromoCodes, farmName: gameState.farmName, keybinds: gameState.keybinds
        };
        const jsonString = JSON.stringify(payload), checksum = calculateChecksum(jsonString), obfuscated = xorCipher(jsonString, XOR_SAVE_KEY), finalCode = btoa(obfuscated) + "." + checksum;
        localStorage.setItem('webFarmSaveData', finalCode);
        if (!isAuto && saveCodeOutputEl) { saveCodeOutputEl.value = finalCode; copyCodeButtonEl.disabled = false; addMessage("Save code generated!", 'success'); }
    } catch (e) { console.error("Save error:", e); }
};

const loadGame = (rawSaveData) => {
    if (!rawSaveData || !rawSaveData.includes('.')) return false;
    try {
        const [encodedData, storedChecksum] = rawSaveData.split('.');
        const jsonString = xorCipher(atob(encodedData), XOR_SAVE_KEY);
        if (calculateChecksum(jsonString) !== storedChecksum) throw new Error("Checksum mismatch.");
        const parsed = JSON.parse(jsonString);

        gameState = createInitialGameState(false);
        gameState.money = parsed.m ?? 100; gameState.totalPlots = parsed.tp ?? INITIAL_PLOTS; gameState.growthSpeedLevel = parsed.gsl ?? 0;
        gameState.inventory = parsed.inv ?? { seeds: {}, produce: {}, gears: {} }; gameState.achievements = parsed.ach ?? {};
        gameState.stats = parsed.st ?? { harvested: {}, planted: {}, totalMoneyEarned: 0 }; gameState.rebirthCount = parsed.rbc ?? 0;
        gameState.rebirthMultiplier = parsed.rbm ?? 1.0; gameState.usedPromoCodes = parsed.usedPromoCodes ?? []; gameState.farmName = parsed.farmName ?? 'Your Farm';
        gameState.keybinds = parsed.keybinds ?? { plantAll: '1', harvestAll: '2', sellAll: '3' };
        gameState.activeDailyQuests = parsed.activeDailyQuests ?? [];

        gameState.plots = (parsed.p || []).map((p, i) => ({
            id: i, state: p.s || 'empty', crop: p.c || null, growDuration: p.gd || null, specialStatuses: p.sss || [], finalWeightMultiplier: p.fw || null, isLocked: p.lk === true, accruedGrowth: p.ag || 0
        }));

        refreshShopStock(); checkAndResetDailyQuests(); checkAllAchievements(); updateUI();
        return true;
    } catch (e) { console.error("Load failed:", e); return false; }
};

const loadGamePrompt = () => { if (saveCodeInputEl?.value && loadGame(saveCodeInputEl.value)) addMessage("Game loaded!", 'success'); };
const copySaveCode = () => { if (saveCodeOutputEl?.value) { navigator.clipboard.writeText(saveCodeOutputEl.value); addMessage("Copied to clipboard!", 'success'); } };

const initializeNewGame = () => {
    gameState = createInitialGameState(true);
    gameState.inventory.seeds['wheat'] = 3;
    refreshShopStock(); generateNewDailyQuests(); updateUI();
};

const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('webFarmSaveData');
    if (!saved || !loadGame(saved)) initializeNewGame();
};

// --- Initialization & Event Binding ---
const setShopTab = (tab) => {
    document.getElementById('shop-tab-fruits')?.classList.toggle('active', tab === 'fruits');
    document.getElementById('shop-tab-gears')?.classList.toggle('active', tab === 'gears');
    document.getElementById('shop-fruits-section').style.display = tab === 'fruits' ? 'block' : 'none';
    document.getElementById('shop-gears-section').style.display = tab === 'gears' ? 'block' : 'none';
};

const setProduceActionMode = (mode) => {
    produceActionMode = mode;
    document.getElementById('action-toggle-sell')?.classList.toggle('active', mode === 'sell');
    document.getElementById('action-toggle-lock')?.classList.toggle('active', mode === 'lock');
};

const setupEventListeners = () => {
    if (eventListenersBound) return;
    eventListenersBound = true;

    document.getElementById('farm-name')?.addEventListener('click', () => {
        openSettingsPopup(); document.getElementById('farm-name-input')?.focus();
    });

    farmGridEl?.addEventListener('mouseover', (e) => {
        const pEl = e.target.closest('.plot');
        if (pEl && !pEl.classList.contains('locked')) {
            const pId = parseInt(pEl.dataset.plotId, 10);
            if (!isNaN(pId)) showPlotTooltip(pId, e);
        } else hidePlotTooltip();
    });
    farmGridEl?.addEventListener('mouseout', (e) => {
        if (!farmGridEl.contains(e.relatedTarget)) hidePlotTooltip();
    });
    farmGridEl?.addEventListener('mousemove', movePlotTooltip);

    inventoryEl?.addEventListener('click', (e) => {
        const li = e.target.closest('li[data-item-key], li.gear-inv-item'); if (!li) return;
        if (li.dataset.gearKey) { selectGearToPlace(li.dataset.gearKey); return; }
        const itemKey = li.dataset.itemKey; if (!itemKey) return;
        if (seedInventoryEl.contains(li)) selectCropToPlant(itemKey);
        else if (produceInventoryEl.contains(li)) produceActionMode === 'sell' ? sellProduce(itemKey, 1) : toggleLockProduce(itemKey);
    });

    [seedInventoryEl, produceInventoryEl].forEach(container => {
        if (!container) return;
        container.addEventListener('mouseover', (e) => {
            const li = e.target.closest('li[data-item-key], li.gear-inv-item');
            if (li) showInventoryTooltip(li, e);
        });
        container.addEventListener('mouseout', hideInventoryTooltip);
        container.addEventListener('mousemove', moveInventoryTooltip);
        container.addEventListener('mouseleave', hideInventoryTooltip);
    });

    if (inventorySearchInputEl) inventorySearchInputEl.addEventListener('input', applyInventorySearch);

    document.getElementById('settings-modal-backdrop')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('settings-modal-backdrop')) closeSettingsPopup();
    });
    updateLogBackdropEl?.addEventListener('click', (e) => {
        if (e.target === updateLogBackdropEl) closeUpdateLogPopup();
    });
    leaderboardBackdropEl?.addEventListener('click', (e) => {
        if (e.target === leaderboardBackdropEl) closeLeaderboardPopup();
    });

    document.getElementById('leaderboard-button')?.addEventListener('click', openLeaderboardPopup);
    document.getElementById('leaderboard-close-button')?.addEventListener('click', closeLeaderboardPopup);
    document.getElementById('leave-leaderboard-button')?.addEventListener('click', leaveLeaderboardOnlinePlay);

    document.addEventListener('keydown', (e) => {
        const tag = e.target.tagName; if (tag === 'INPUT' || tag === 'TEXTAREA' || !gameState?.keybinds) return;
        const pressed = (e.key || '').toLowerCase();
        if (pressed === (gameState.keybinds.harvestAll || '2')) { e.preventDefault(); harvestAllReadyCrops(); }
        else if (pressed === (gameState.keybinds.plantAll || '1')) { e.preventDefault(); plantAllSelectedSeed(); }
        else if (pressed === (gameState.keybinds.sellAll || '3')) { e.preventDefault(); sellAllProduce(); }
    });

    saveCodeInputEl?.addEventListener('input', () => {
        if (saveCodeInputEl.value === DEV_ACTIVATION_CODE) {
            isDevModeEnabled = !isDevModeEnabled;
            if (devConsoleEl) devConsoleEl.style.display = isDevModeEnabled ? 'block' : 'none';
            if (messagesEl) messagesEl.style.display = isDevModeEnabled ? 'block' : 'none';
            saveCodeInputEl.value = '';
        }
    });

    devCommandInputEl?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            executeAdminCommandText(devCommandInputEl.value.trim(), 'console');
        }
    });
};

const initGame = () => {
    if (gameLoopInterval) clearInterval(gameLoopInterval);
    if (autoSaveInterval) clearInterval(autoSaveInterval);
    loadFromLocalStorage(); setupEventListeners();
    gameLoopInterval = setInterval(gameLoop, TICK_INTERVAL);
    autoSaveInterval = setInterval(() => saveGame(true), AUTOSAVE_INTERVAL);
    startGoogleSheetCommandPolling();
    startLeaderboardSubmitPolling();
};

document.addEventListener('DOMContentLoaded', () => initGame());
