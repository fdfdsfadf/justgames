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
            'dango': { name: 'Dango', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/dango.png" alt="Dango" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 80000, sellPrice: 165000, growTime: 200000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.15 },
            'taco': { name: 'Admin Taco', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/taco.png" alt="Admin Taco" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: null, sellPrice: 15000000, growTime: 240000, weightRange: [1.0, 1.0], rarity: 'ultra_rare', stockChance: 1.0, isEvent: true, eventWeather: 'autumn' },
            'bell_pepper': { name: 'Bell Pepper', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/bell_pepper.png" alt="Bell Pepper" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 2000000, sellPrice: 3000000, growTime: 600000, weightRange: [0.95, 1.05], rarity: 'ultra_rare', stockChance: 0.10 },
            'dragonfruit': { name: 'Dragonfruit', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/dragonfruit.png" alt="Dragonfruit" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 1000000, sellPrice: 1200000, growTime: 400000, weightRange: [0.95, 1.07], rarity: 'ultra_rare', stockChance: 0.15 },
            'pomegranate': { name: 'Pomegranate', icon: '<img src="http://raw.githubusercontent.com/guahhinc/webfarm/main/pomegranate.png" alt="Pomegranate" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 5000000, sellPrice: 7500000, growTime: 450000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.10 },
            'litchi': { name: 'Lychee', icon: '<img src="http://raw.githubusercontent.com/guahhinc/webfarm/main/litchi.png" alt="Lychee" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 15000000, sellPrice: 19000000, growTime: 500000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.1 },
            'fig': { name: 'Fig', icon: '<img src="http://raw.githubusercontent.com/guahhinc/webfarm/main/fig.png" alt="Fig" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 50000000, sellPrice: 61000000, growTime: 520000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.08 },
            'star_fruit': { name: 'Star Fruit', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/star_fruit.png" alt="Star Fruit" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 750000000, sellPrice: 1200000000, growTime: 540000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.09 },
            'rambutan': { name: 'Rambutan', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/rambutan.png" alt="Rambutan" style="height: 1.3em; width: 1.3em; object-fit: contain; vertical-align: middle;">', seedCost: 3000000000, sellPrice: 4600000000, growTime: 580000, weightRange: [0.9, 1.1], rarity: 'ultra_rare', stockChance: 0.08 },
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
            'rebirth_1': { name: "First Rebirth", icon: "🔄", desc: "Complete your first Rebirth.", rwd: 500000, type: 'state.rb', thr: 1 },
            'upgrade_growth_max': { name: "Max Velocity", icon: "🚀", desc: `Reach max growth speed (Level 7).`, rwd: 5000, type: 'state.g', thr: 7 },
            'harvest_silver': { name: "Silver Lining", icon: "🥈", desc: "Harvest your first Silver crop.", rwd: 3000, type: 'stats.mut', tgt: 'silver', thr: 1 },
            'complete_all': { name: "Farm Master", icon: "👑", desc: "Complete all other achievements.", rwd: 10000000, type: 'all' }
        };

        const QUEST_DEFINITIONS = [
            { id: "harvest_wheat_5", title: "Wheat Harvest", description: "Harvest 5 Wheat.", type: "harvest", targetCrop: "wheat", targetAmount: 5, rewards: { money: 1500, seeds: { 'carrot': 12, 'lettuce': 8 } } },
            { id: "plant_carrot_3", title: "Carrot Planting", description: "Plant 3 Carrots.", type: "plant", targetCrop: "carrot", targetAmount: 3, rewards: { money: 1200, seeds: { 'wheat': 12, 'potato': 8 } } },
            { id: "earn_money_100", title: "Daily Earnings", description: "Earn 250 Money today.", type: "earn_money", targetAmount: 250, rewards: { money: 1000, seeds: { 'potato': 10, 'corn': 6 } } },
            { id: "harvest_lettuce_2", title: "Lettuce Picking", description: "Harvest 2 Lettuce.", type: "harvest", targetCrop: "lettuce", targetAmount: 2, rewards: { money: 1800, seeds: { 'strawberry': 8 } } },
            { id: "plant_any_5", title: "Busy Planter", description: "Plant any 5 crops.", type: "plant_any", targetAmount: 5, rewards: { money: 2200, seeds: { 'corn': 10, 'strawberry': 8 } } },
            { id: "sell_corn_3", title: "Corn Sale", description: "Sell 3 Corn.", type: "sell_produce_type", targetCrop: "corn", targetAmount: 3, rewards: { money: 2800, seeds: { 'kiwi': 8 } } },
            { id: "sell_any_produce_5", title: "Market Day", description: "Sell any 5 produce items.", type: "sell_any_produce", targetAmount: 5, rewards: { money: 2000, seeds: { 'kiwi': 6, 'mango': 5 } } },
            { id: "harvest_golden_1", title: "Golden Touch", description: "Harvest 1 Golden crop.", type: "harvest_golden", targetAmount: 1, rewards: { money: 5000, seeds: { 'mango': 8, 'mushroom': 6 } } },
        ];


        const INITIAL_PLOTS = 3; const MAX_PLOTS = 36; const PLOT_COST_BASE = 75; const PLOT_COST_INCREASE_FACTOR = 1.45;
        const TICK_INTERVAL = 100; const AUTOSAVE_INTERVAL = 5000;
        const SAVE_CODE_VERSION = '1.2.6';
        const LOG_PRUNE_THRESHOLD = 80;
        const XOR_SAVE_KEY = 'webfarmkey_34252465488682';
        const REDEEMED_PROMOS_STORAGE_KEY = 'webFarmRedeemedPromoCodes';
        const normalizePromoCode = (raw) => String(raw || '').trim().replace(/\s+/g, '').toLowerCase();
        const DEV_ACTIVATION_CODE = 'dev-2588624836783023489768723895438973895';
        const SHOP_REFRESH_MIN = 80 * 1000;
        const SHOP_REFRESH_MAX = 80 * 1000;
        const ALWAYS_AVAILABLE_SHOP_ITEMS = 13;
        const ULTRA_RARE_SLOTS_IN_SHOP = 2;
        const NORMAL_RARE_ROTATING_SLOTS = 7;
        const SHOP_STOCK_LIMITS = {
            common: 120,
            rare: 55,
            ultra_rare: 20,
            default: 80,
        };
        const GEAR_STOCK_LIMITS = {
            common: 6,
            rare: 2,
            ultra_rare: 1,
            default: 6,
        };
        const DAILY_QUEST_COUNT = 2;

        const MAX_REBIRTHS = 23;
        const REBIRTH_BASE_COST = 37500;
        const REBIRTH_COST_MULTIPLIER = 1.15;
        const REBIRTH_COST_SCALE = 3.5;
        const REBIRTH_MULTIPLIER_AT_MAX = 4;
        const getRebirthMultiplier = (count) => Math.pow(REBIRTH_MULTIPLIER_AT_MAX, count / MAX_REBIRTHS);

        const REBIRTH_GATED_FRUIT_COUNT = 8;
        /** Unlock order: every 3 rebirths (3,6,…,21), last tier at max rebirths (23). Fits MAX_REBIRTHS. */
        const REBIRTH_UNLOCK_MILESTONES = [3, 6, 9, 12, 15, 18, 21, 23];
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

        const MAX_GROWTH_LEVELS = 7; const GROWTH_MULTIPLIERS = [1.0, 0.85, 0.70, 0.55, 0.40, 0.25, 0.15, 0.08]; const GROWTH_UPGRADE_COSTS = [200, 600, 1800, 5000, 12000, 500000, 3000000];

        const SPECIAL_STATUSES = {
            'golden': { name: 'Golden', icon: '🥇', chance: 0.10, sellMultiplier: 1.8, type: 'generic' },
            'silver': { name: 'Silver', icon: '🥈', chance: 0.05, sellMultiplier: 1.5, type: 'generic' },
            'bronze': { name: 'Bronze', icon: '🥉', chance: 0.15, sellMultiplier: 1.3, type: 'generic' },
            'pollinated': { name: 'Pollinated', icon: '🍯', chance: 0.03, sellMultiplier: 2.5, type: 'generic' },
            'maple': { name: 'Maple', icon: '🍁', chance: 0.002, sellMultiplier: 2.2, type: 'generic' },
            'rainbow': { name: 'Rainbow', icon: '🌈', chance: 0.03, sellMultiplier: 4.0, type: 'rare_generic' },
            'cosmic': { name: 'Cosmic', icon: '🌌', chance: 0.01, sellMultiplier: 5.0, type: 'rare_generic' },
            'scorched': { name: 'Scorched', icon: '☀️', chance: 0, sellMultiplier: 2.0, type: 'weather' },
            'moonlit': { name: 'Moonlit', icon: '🌙', chance: 0, sellMultiplier: 3.0, type: 'weather' },
            'frozen': { name: 'Frozen', icon: '🧊', chance: 0, sellMultiplier: 2.0, type: 'weather' },
            'shocked': { name: 'Shocked', icon: '⚡', chance: 0, sellMultiplier: 3.0, type: 'weather' },
            'wet': { name: 'Wet', icon: '💧', chance: 0, sellMultiplier: 2.0, type: 'weather' },
            'cheese': { name: 'Cheese', icon: '🧀', chance: 0, sellMultiplier: 2.5, type: 'weather' },
        };

        const WEATHER_CONFIG = {
            'sunny': {
                name: 'Sunny', icon: '☀️', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [
                    { status: 'scorched', chance: 0.04 }
                ]
            },
            'lightning': {
                name: 'Lightning', icon: '🌩️', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [
                    { status: 'shocked', chance: 0.10 }, { status: 'wet', chance: 0.10 }
                ]
            },
            'icy_rain': {
                name: 'Icy Rain', icon: '🌨️', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [
                    { status: 'frozen', chance: 0.15 }
                ]
            },
            'gentle_rain': {
                name: 'Gentle Rain', icon: '🌦️', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [
                    { status: 'wet', chance: 0.15 }
                ], growthModifier: 1.15
            },
            'night': {
                name: 'Night', icon: '⭐', duration_ms: [2 * 60 * 1000, 4 * 60 * 1000], effects: [
                    { status: 'moonlit', chance: 0.05 }
                ]
            },
            'autumn': {
                name: 'Autumn', icon: '🍂', duration_ms: [3 * 60 * 1000, 5 * 60 * 1000], effects: []
            },
        };
        const WEATHER_TYPE_KEYS = Object.keys(WEATHER_CONFIG);

        const GEAR_DATA = {
            'wet_splash': { name: 'Wet Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/wet_splash.png" alt="Wet Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 10000, splashCount: 10, splashStatus: 'wet', description: 'Gives 10 random crops Wet mutation.', rarity: 'common', stockChance: 0.90 },
            'silver_splash': { name: 'Silver Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/silver_splash.png" alt="Silver Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 100000, splashCount: 12, splashStatus: 'silver', description: 'Gives 12 random crops Silver mutation.', rarity: 'common', stockChance: 0.85 },
            'scorched_splash': { name: 'Scorched Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/scorched_splash.png" alt="Scorched Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 80000, splashCount: 10, splashStatus: 'scorched', description: 'Gives 10 random crops Scorched mutation.', rarity: 'common', stockChance: 0.75 },
            'golden_splash': { name: 'Golden Splash', type: 'splash', icon: '<img src="http://raw.githubusercontent.com/guahhinc/webfarm/main/golden_splash.png" alt="Golden Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 300000, splashCount: 10, splashStatus: 'golden', description: 'Gives 10 random crops Golden mutation.', rarity: 'rare', stockChance: 0.25 },
            'rainbow_splash': { name: 'Rainbow Splash', type: 'splash', icon: '<img src="https://raw.githubusercontent.com/guahhinc/webfarm/main/rainbow_splash.png" alt="Rainbow Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 800000, splashCount: 10, splashStatus: 'rainbow', description: 'Gives 10 random crops Rainbow mutation.', rarity: 'rare', stockChance: 0.15 },
            'cosmic_splash': { name: 'Cosmic Splash', type: 'splash', icon: '<img src="http://raw.githubusercontent.com/guahhinc/webfarm/main/cosmic_splash.png" alt="Cosmic Splash" style="height:1.3em;width:1.3em;object-fit:contain;vertical-align:middle;">', cost: 20000000, splashCount: 10, splashStatus: 'cosmic', description: 'Gives 10 random crops Cosmic mutation.', rarity: 'ultra_rare', stockChance: 0.05 }
        };

        let gameState = null; let gameLoopInterval = null; let autoSaveInterval = null;

        const mergePromoCodesIntoGameState = () => {
            if (!gameState) return;
            let fromLs = [];
            try {
                const raw = localStorage.getItem(REDEEMED_PROMOS_STORAGE_KEY);
                const parsed = raw ? JSON.parse(raw) : [];
                if (Array.isArray(parsed)) fromLs = parsed.map(normalizePromoCode).filter(Boolean);
            } catch (e) { /* ignore corrupt storage */ }
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
        let isDevModeEnabled = false; let isModActive = false; let activeModChecksum = null;
        let achievementPopupTimeout = null; let tipPopupTimeout = null;
        let activeTooltipPlotId = null;
        let selectedGearToPlace = null;

        const moneyEl = document.getElementById('money'); const farmGridEl = document.getElementById('farm-grid'); const seedInventoryEl = document.getElementById('seed-inventory'); const produceInventoryEl = document.getElementById('produce-inventory'); const plantingOptionsEl = document.getElementById('planting-options'); const buySeedsEl = document.getElementById('buy-seeds'); const messagesEl = document.getElementById('messages'); const saveCodeOutputEl = document.getElementById('save-code-output'); const saveCodeInputEl = document.getElementById('save-code-input'); const copyCodeButtonEl = document.getElementById('copy-code-button'); const farmUpgradesContainerEl = document.getElementById('farm-upgrades-container'); const achievementsListEl = document.getElementById('achievements-list'); const devConsoleEl = document.getElementById('dev-console'); const devCommandInputEl = document.getElementById('dev-command-input');
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
        const gearInventoryEl = document.getElementById('gear-inventory');
        const buyGearsEl = document.getElementById('buy-gears');
        const rebirthContentEl = document.getElementById('rebirth-content');

        let purchaseQtySeeds = 1;
        const setPurchaseQtySeeds = (qty) => {
            purchaseQtySeeds = qty;
            document.querySelectorAll('.qty-toggle-btn.qty-seeds').forEach(btn => {
                btn.classList.toggle('active', parseInt(btn.textContent, 10) === qty);
            });
            updateUI();
        };

        const xorCipher = (s, k) => { let r = ''; for (let i = 0; i < s.length; i++)r += String.fromCharCode(s.charCodeAt(i) ^ k.charCodeAt(i % k.length)); return r; }
        const calculateChecksum = (s) => { let sum = 0; for (let i = 0; i < s.length; i++)sum = (sum + s.charCodeAt(i) * (i + 1)) % 65536; return sum.toString(16).padStart(4, '0'); }
        const calculatePlotCost = () => { if (!gameState) return PLOT_COST_BASE; const p = Math.max(0, gameState.totalPlots - INITIAL_PLOTS), f = gameState.totalPlots > 15 ? PLOT_COST_INCREASE_FACTOR * 1.1 : PLOT_COST_INCREASE_FACTOR; return Math.floor(PLOT_COST_BASE * Math.pow(f, p)); }
        const addMessage = (m, t = 'info', f = false) => { const l = m.toLowerCase(); if (!f && (l.includes('generated save'))) return; const c = messagesEl; if (!c) return; let h = c.querySelector('h2'); if (!h) { h = document.createElement('h2'); h.textContent = '📜 Log'; c.prepend(h); } const p = document.createElement('p'); const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit" }); p.textContent = `[${time}] ${m}`; p.className = `log-${t}`; h.after(p); const msgs = c.querySelectorAll('p'); if (msgs.length > LOG_PRUNE_THRESHOLD) { if (c.lastElementChild && c.lastElementChild.tagName === 'P') { c.removeChild(c.lastElementChild); } } c.scrollTop = 0; }
        const calculateGrowthMultiplier = () => { return gameState ? (GROWTH_MULTIPLIERS[gameState.growthSpeedLevel] ?? GROWTH_MULTIPLIERS[0]) : 1.0; }
        const calculateGrowthUpgradeCost = () => (!gameState || gameState.growthSpeedLevel >= MAX_GROWTH_LEVELS) ? Infinity : (GROWTH_UPGRADE_COSTS[gameState.growthSpeedLevel] ?? Infinity);
        const formatTime = (ms, includeSeconds = true) => { if (ms <= 0) return includeSeconds ? "0s" : "0m"; let totalSeconds = Math.ceil(ms / 1000); const h = Math.floor(totalSeconds / 3600); totalSeconds %= 3600; const m = Math.floor(totalSeconds / 60); const s = totalSeconds % 60; let timeStr = ""; if (h > 0) timeStr += `${h}h `; if (m > 0) timeStr += `${m}m `; if (includeSeconds || (h === 0 && m === 0)) { if (s > 0 || (h === 0 && m === 0)) timeStr += `${s}s`; } return timeStr.trim() || (includeSeconds ? "0s" : "0m"); };
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
        const getFormattedTimeLeft = (plotData) => { if (plotData?.state === 'growing' && plotData.growDuration) { let environmentalSpeedBoost = 1.0; if (gameState.currentWeather === 'gentle_rain' && WEATHER_CONFIG.gentle_rain.growthModifier) { environmentalSpeedBoost = WEATHER_CONFIG.gentle_rain.growthModifier; } let timeLeftMs; if (plotData.accruedGrowth !== undefined) { timeLeftMs = (plotData.growDuration - plotData.accruedGrowth) / environmentalSpeedBoost; } else { const effectiveGrowDuration = plotData.growDuration / environmentalSpeedBoost; const timeElapsed = Date.now() - plotData.plantedTime; timeLeftMs = effectiveGrowDuration - timeElapsed; } return Math.max(0, timeLeftMs) > 0 ? formatTime(Math.max(0, timeLeftMs)) : "Almost done!"; } return ""; }
        const getRandomWeight = (range) => !range ? 1.0 : Math.random() * (range[1] - range[0]) + range[0];
        const shuffleArray = (array) => { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[array[i], array[j]] = [array[j], array[i]]; } return array; };
        const getRandomDuration = (durationRangeMs) => Math.floor(Math.random() * (durationRangeMs[1] - durationRangeMs[0] + 1)) + durationRangeMs[0];
        const parseItemKey = (itemKey) => { let tempKey = itemKey; const foundStatuses = []; const allStatusKeysSorted = Object.keys(SPECIAL_STATUSES).sort(); let statusesParsed = true; while (statusesParsed) { statusesParsed = false; for (const status of allStatusKeysSorted) { if (tempKey.startsWith(status + '_')) { foundStatuses.push(status); tempKey = tempKey.substring(status.length + 1); statusesParsed = true; break; } } } let baseKey = itemKey; let statusKeys = []; if (CROP_DATA[tempKey]) { baseKey = tempKey; statusKeys = foundStatuses; } let sellMultiplier = 1; let displayPrefix = ""; let namePrefix = ""; statusKeys.forEach(statusKey => { const statusInfo = SPECIAL_STATUSES[statusKey]; if (statusInfo) { sellMultiplier *= statusInfo.sellMultiplier; displayPrefix += `${statusInfo.icon}`; namePrefix += `${statusInfo.name} `; } }); return { baseKey, statusKeys, sellMultiplier, displayPrefix: displayPrefix ? displayPrefix + ' ' : '', namePrefix }; };

        const showAchievementPopup = (achData) => { if (!achievementPopupEl || !achData) return; clearTimeout(achievementPopupTimeout); achPopupIconEl.textContent = achData.icon || '🏆'; achPopupTitleEl.textContent = `Achievement: ${achData.name}`; achPopupRewardEl.textContent = achData.rwd > 0 ? `Reward: ${achData.rwd}💰` : ''; achPopupRewardEl.style.display = achData.rwd > 0 ? 'block' : 'none'; achievementPopupEl.classList.add('active'); achievementPopupTimeout = setTimeout(() => achievementPopupEl.classList.remove('active'), 5000); }
        const showTip = (tipKey, message) => { if (!gameState?.shownTips || gameState.shownTips.includes(tipKey)) return; clearTimeout(tipPopupTimeout); tipPopupTextEl.textContent = message; tipPopupEl.classList.add('active'); gameState.shownTips.push(tipKey); tipPopupTimeout = setTimeout(() => tipPopupEl.classList.remove('active'), 7000); }

        const checkAndGrantAchievement = (key) => { if (!gameState || !ACHIEVEMENT_DATA[key] || gameState.achievements[key]) return; const ach = ACHIEVEMENT_DATA[key]; let met = false; try { switch (ach.type) { case 'stats.h': met = (gameState.stats.harvested[ach.tgt] || 0) >= ach.thr; break; case 'stats.p': met = (gameState.stats.planted[ach.tgt] || 0) >= ach.thr; break; case 'stats.m': met = (gameState.stats.totalMoneyEarned || 0) >= ach.thr; break; case 'state.p': met = gameState.totalPlots >= ach.thr; break; case 'state.rb': met = gameState.rebirthCount >= ach.thr; break; case 'state.g': met = gameState.growthSpeedLevel >= ach.thr; break; case 'stats.mut': met = (gameState.stats.mutationsHarvested[ach.tgt] || 0) >= ach.thr; break; case 'all': met = Object.keys(ACHIEVEMENT_DATA).every(k => k === key || k === 'complete_all' || gameState.achievements[k]); break; default: console.warn(`Unk achievement type:${ach.type}`) } } catch (e) { console.error(`Achievement check fail ${key}:`, e); met = false; } if (met) { gameState.achievements[key] = true; let rwdMsg = ach.rwd > 0 ? ` Reward: +${ach.rwd}💰` : ""; if (ach.rwd > 0) gameState.money += ach.rwd; addMessage(`🏆 Achievement Unlocked: ${ach.name}!${rwdMsg}`, (key === 'complete_all') ? 'gold' : 'success', true); showAchievementPopup(ach); const li = achievementsListEl.querySelector(`li[data-ach-key="${key}"]`); if (li) { li.classList.add('achievement-unlocked-animate'); setTimeout(() => { li.classList.remove('achievement-unlocked-animate'); }, 1000); } updateUI(); if (key !== 'complete_all') checkAndGrantAchievement('complete_all'); } }
        const checkAllAchievements = () => { if (!gameState) return; for (const k in ACHIEVEMENT_DATA) checkAndGrantAchievement(k); }

        const selectCropToPlant = (key) => {
            if (!gameState) return;
            if (CROP_DATA[key]?.seedCost !== null) {
                if (!isCropUnlockedForRebirth(key)) {
                    addMessage(`🔒 ${CROP_DATA[key]?.name || key} unlocks at rebirth ${getMinRebirthsToBuyCrop(key)}.`, 'error', true);
                    return;
                }
                if (gameState.selectedCropToPlant === key) {
                    gameState.selectedCropToPlant = null;
                    addMessage('Seed deselected.', 'info');
                    updateUI();
                    return;
                }
                // Equipping a seed should unequip any gear
                selectedGearToPlace = null;
                gameState.selectedCropToPlant = key;
                updateUI();
            } else {
                addMessage(`Cannot select ${CROP_DATA[key]?.name || key}. It's not a seed.`, 'error', true);
            }
        }

        const plantCrop = (id) => {
            if (!gameState || id < 0 || id >= gameState.plots.length) return;
            const p = gameState.plots[id], key = gameState.selectedCropToPlant;
            if (!p || p.state !== 'empty') { addMessage("Plot is not empty.", 'error', true); return; }
            if (!key) { addMessage("Select a seed to plant.", 'error', true); return; }
            const inf = CROP_DATA[key];
            if (inf?.seedCost === null) { addMessage(`Cannot plant '${key}'.`, 'error', true); gameState.selectedCropToPlant = null; updateUI(); return; }
            if (!isCropUnlockedForRebirth(key)) {
                addMessage(`🔒 ${inf.name} unlocks at rebirth ${getMinRebirthsToBuyCrop(key)}.`, 'error', true);
                return;
            }
            if (!(gameState.inventory.seeds[key] > 0)) { addMessage(`No ${inf.name} seeds!`, 'error', true); return; }

            gameState.inventory.seeds[key]--;
            p.state = 'growing'; p.crop = key; p.plantedTime = Date.now(); p.accruedGrowth = 0;
            p.growDuration = inf.growTime * calculateGrowthMultiplier();
            p.finalWeightMultiplier = getRandomWeight(inf.weightRange);
            p.specialStatuses = [];

            const randRare = Math.random();
            if (randRare < SPECIAL_STATUSES.cosmic.chance) {
                p.specialStatuses.push('cosmic');
            } else if (randRare < SPECIAL_STATUSES.cosmic.chance + SPECIAL_STATUSES.rainbow.chance) { p.specialStatuses.push('rainbow'); }
            if (Math.random() < SPECIAL_STATUSES.pollinated.chance) p.specialStatuses.push('pollinated');
            if (Math.random() < SPECIAL_STATUSES.golden.chance) p.specialStatuses.push('golden');
            if (Math.random() < SPECIAL_STATUSES.silver.chance) p.specialStatuses.push('silver');
            if (Math.random() < SPECIAL_STATUSES.bronze.chance) p.specialStatuses.push('bronze');
            const mapleChance = (gameState.currentWeather === 'autumn') ? 0.07 : SPECIAL_STATUSES.maple.chance;
            if (Math.random() < mapleChance) p.specialStatuses.push('maple');

            let activeWeatherEffects = [];
            if (gameState.currentWeather && WEATHER_CONFIG[gameState.currentWeather]?.effects) {
                activeWeatherEffects = WEATHER_CONFIG[gameState.currentWeather].effects;
            }
            if (activeWeatherEffects.length > 0) {
                for (const effect of activeWeatherEffects) {
                    if (Math.random() < effect.chance) {
                        if (!p.specialStatuses.includes(effect.status)) {
                            p.specialStatuses.push(effect.status);
                        }
                    }
                }
            }
            p.specialStatuses.sort();

            gameState.stats.planted[key] = (gameState.stats.planted[key] || 0) + 1;
            let plantMessage = `Planted ${inf.icon} ${inf.name} in plot ${id + 1}.`;
            if (p.specialStatuses.length > 0) {
                const statusNames = p.specialStatuses.map(s => SPECIAL_STATUSES[s].name).join(', ');
                const statusIcons = p.specialStatuses.map(s => SPECIAL_STATUSES[s].icon).join('');
                plantMessage += ` It looks ${statusNames}! (${statusIcons})`;
            }
            plantMessage += ` (Est. final weight: ${p.finalWeightMultiplier.toFixed(2)}x)`;
            addMessage(plantMessage, 'success');

            updateQuestProgress('plant', 1, key);
            updateQuestProgress('plant_any', 1);

            const el = farmGridEl.querySelector(`.plot[data-plot-id="${id}"]`);
            if (el) { el.classList.add('plot-plant-animate'); setTimeout(() => el.classList.remove('plot-plant-animate'), 500); }
            const totalSeeds = Object.values(gameState.inventory.seeds).reduce((sum, count) => sum + count, 0);
            if (totalSeeds === 0) showTip('outOfSeeds', "Out of seeds! Visit the Shop 🛒 to restock.");
            checkAllAchievements(); updateUI();
        }

        const plantAllSelectedSeed = () => {
            if (!gameState) return;
            const key = gameState.selectedCropToPlant;
            if (!key) { addMessage("Select a seed first.", 'error', true); return; }
            const inf = CROP_DATA[key];
            if (!inf || inf.seedCost === null) return;
            if (!isCropUnlockedForRebirth(key)) {
                addMessage(`🔒 ${inf.name} unlocks at rebirth ${getMinRebirthsToBuyCrop(key)}.`, 'error', true);
                return;
            }
            let planted = 0;
            for (let i = 0; i < gameState.plots.length; i++) {
                const p = gameState.plots[i];
                if (p.state === 'empty' && (gameState.inventory.seeds[key] > 0)) {
                    gameState.inventory.seeds[key]--;
                    p.state = 'growing'; p.crop = key; p.plantedTime = Date.now(); p.accruedGrowth = 0;
                    p.growDuration = inf.growTime * calculateGrowthMultiplier();
                    p.finalWeightMultiplier = getRandomWeight(inf.weightRange);
                    p.specialStatuses = [];
                    const randRare = Math.random();
                    if (randRare < SPECIAL_STATUSES.cosmic.chance) p.specialStatuses.push('cosmic');
                    else if (randRare < SPECIAL_STATUSES.cosmic.chance + SPECIAL_STATUSES.rainbow.chance) p.specialStatuses.push('rainbow');
                    if (Math.random() < SPECIAL_STATUSES.pollinated.chance) p.specialStatuses.push('pollinated');
                    if (Math.random() < SPECIAL_STATUSES.golden.chance) p.specialStatuses.push('golden');
                    if (Math.random() < SPECIAL_STATUSES.silver.chance) p.specialStatuses.push('silver');
                    if (Math.random() < SPECIAL_STATUSES.bronze.chance) p.specialStatuses.push('bronze');
                    const mapleChance = (gameState.currentWeather === 'autumn') ? 0.07 : SPECIAL_STATUSES.maple.chance;
                    if (Math.random() < mapleChance) p.specialStatuses.push('maple');
                    let activeWeatherEffects = [];
                    if (gameState.currentWeather && WEATHER_CONFIG[gameState.currentWeather]?.effects) activeWeatherEffects = WEATHER_CONFIG[gameState.currentWeather].effects;
                    for (const effect of activeWeatherEffects) { if (Math.random() < effect.chance && !p.specialStatuses.includes(effect.status)) p.specialStatuses.push(effect.status); }
                    p.specialStatuses.sort();
                    gameState.stats.planted[key] = (gameState.stats.planted[key] || 0) + 1;
                    updateQuestProgress('plant', 1, key);
                    updateQuestProgress('plant_any', 1);
                    planted++;
                }
            }
            if (planted > 0) { addMessage(`Planted ${planted} ${inf.name} seed${planted > 1 ? 's' : ''} across all empty plots!`, 'success'); checkAllAchievements(); updateUI(); }
            else { addMessage(`No empty plots or no ${inf.name} seeds left.`, 'error', true); }
        };

        const togglePlotLock = (id) => {
            if (!gameState || id < 0 || id >= gameState.plots.length) return;
            const p = gameState.plots[id];
            if (!p || p.state === 'empty') return;
            p.isLocked = !p.isLocked;
            updateUI();
        };

        const getRebirthCost = (level) => Math.floor(REBIRTH_BASE_COST * REBIRTH_COST_MULTIPLIER * Math.pow(REBIRTH_COST_SCALE, level));

        const performRebirth = () => {
            if (!gameState) return;
            if (gameState.rebirthCount >= MAX_REBIRTHS) { addMessage("Max rebirths reached!", 'error', true); return; }
            const cost = getRebirthCost(gameState.rebirthCount);
            if (gameState.money < cost) { addMessage(`Need ${cost.toLocaleString()}💰 to rebirth. You have ${gameState.money.toLocaleString()}💰.`, 'error', true); return; }
            const nextRebirthNum = gameState.rebirthCount + 1;
            const nextMulti = getRebirthMultiplier(nextRebirthNum);
            if (!confirm(`Are you sure you want to Rebirth?\n\nCost: ${cost.toLocaleString()}💰\nYou will LOSE: Money, plots, inventory, growth levels.\nYou will KEEP: Achievements.\nYou will GAIN: ${nextMulti.toFixed(2)}x sell multiplier (max ${REBIRTH_MULTIPLIER_AT_MAX}x), +1 starting plot.\n\nCurrent rebirths: ${gameState.rebirthCount}/${MAX_REBIRTHS}`)) return;

            gameState.rebirthCount = nextRebirthNum;
            gameState.rebirthMultiplier = getRebirthMultiplier(gameState.rebirthCount);
            const savedAchievements = { ...gameState.achievements };
            const savedRebirthCount = gameState.rebirthCount;
            const savedRebirthMultiplier = gameState.rebirthMultiplier;
            const savedShownTips = [...gameState.shownTips];
            const savedStats = { totalMoneyEarned: 0, hasSoldProduce: false, harvested: {}, planted: {}, mutationsHarvested: {} };
            mergePromoCodesIntoGameState();
            const savedUsedPromoCodes = Array.isArray(gameState.usedPromoCodes) ? gameState.usedPromoCodes.slice() : [];
            const savedFarmName = typeof gameState.farmName === 'string' ? gameState.farmName : 'Your Farm';
            const savedLockedProduceKeys = Object.keys(gameState.inventory.produce || {}).filter(k => gameState.inventory.produce[k]?.isFavorited);

            gameState = createInitialGameState(false);
            gameState.achievements = savedAchievements;
            gameState.rebirthCount = savedRebirthCount;
            gameState.rebirthMultiplier = savedRebirthMultiplier;
            gameState.shownTips = savedShownTips;
            gameState.stats = savedStats;
            gameState.usedPromoCodes = savedUsedPromoCodes;
            // #region agent log
            fetch('http://127.0.0.1:7711/ingest/f0a6c53b-7ebe-41d3-94f8-ef8a60c84063',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'ef421f'},body:JSON.stringify({sessionId:'ef421f',location:'script.js:performRebirth:after',message:'promo after rebirth',data:{saved:savedUsedPromoCodes,now:gameState.usedPromoCodes?.slice?.()},timestamp:Date.now(),hypothesisId:'H5'})}).catch(()=>{});
            // #endregion
            gameState.farmName = savedFarmName;

            // Restore locked produce flags on any matching keys that still exist
            savedLockedProduceKeys.forEach(k => {
                if (gameState.inventory.produce[k]) {
                    gameState.inventory.produce[k].isFavorited = true;
                }
            });
            // Extra starting slots from rebirth
            const extraSlots = savedRebirthCount;
            gameState.totalPlots = INITIAL_PLOTS + extraSlots;
            gameState.plots = [];
            for (let i = 0; i < gameState.totalPlots; i++) {
                gameState.plots.push({ id: i, state: 'empty', crop: null, plantedTime: null, growDuration: null, specialStatuses: [], finalWeightMultiplier: null, isLocked: false });
            }

            // Grant starter wheat seeds on every rebirth
            if (CROP_DATA['wheat'] && CROP_DATA['wheat'].seedCost !== null) {
                gameState.inventory.seeds['wheat'] = (gameState.inventory.seeds['wheat'] || 0) + 3;
            }

            addMessage(`\ud83d\udd04 REBIRTH #${savedRebirthCount}! Sell multiplier is now ${savedRebirthMultiplier.toFixed(2)}x! Starting with ${gameState.totalPlots} plots and +3 Wheat seeds!`, 'gold', true);
            refreshShopStock();
            generateNewDailyQuests();
            checkAllAchievements();
            updateUI();
        };

        const harvestCrop = (id, isBulkHarvest = false) => {
            if (!gameState || id < 0 || id >= gameState.plots.length) return false;
            const p = gameState.plots[id];
            if (!p || p.state !== 'ready') { if (p.state !== 'empty' && !isBulkHarvest) addMessage("Crop not ready.", 'error', true); return false; }

            const plantedKey = p.crop;
            const plantedInfo = CROP_DATA[plantedKey];
            const specialStatuses = p.specialStatuses || [];
            const finalWeightMultiplier = p.finalWeightMultiplier || 1.0;
            const totalHarvestsBefore = Object.values(gameState.stats.harvested).reduce((a, b) => a + b, 0);

            let displayPrefix = "";
            let namePrefix = "";
            specialStatuses.forEach(sKey => { displayPrefix += SPECIAL_STATUSES[sKey]?.icon ? `${SPECIAL_STATUSES[sKey].icon}` : ''; namePrefix += SPECIAL_STATUSES[sKey]?.name ? `${SPECIAL_STATUSES[sKey].name} ` : ''; });
            displayPrefix = displayPrefix ? displayPrefix + ' ' : '';

            let actualHarvestKey = plantedKey;
            let harvestDisplay = "";
            let msgType = 'success';
            let itemWeightForInventory = finalWeightMultiplier;
            const inventoryKeyPrefix = specialStatuses.length > 0 ? specialStatuses.sort().join('_') + '_' : "";

            if (!plantedKey || !plantedInfo) {
                addMessage(`Harvest Error: Unknown crop '${plantedKey}'?`, 'error', true);
                msgType = 'error';
                actualHarvestKey = null;
            } else if (plantedInfo.yields?.length > 0 && specialStatuses.length === 0) {
                const yieldKey = plantedInfo.yields[Math.floor(Math.random() * plantedInfo.yields.length)];
                const yieldInfo = CROP_DATA[yieldKey];
                if (yieldInfo && yieldInfo.sellPrice !== null) {
                    actualHarvestKey = yieldKey;
                    itemWeightForInventory = getRandomWeight(yieldInfo.weightRange);
                    const produceInvKey = `${inventoryKeyPrefix}${yieldKey}`;
                    if (!gameState.inventory.produce[produceInvKey]) gameState.inventory.produce[produceInvKey] = { count: 0, totalWeight: 0.0, isFavorited: false };
                    gameState.inventory.produce[produceInvKey].count++;
                    gameState.inventory.produce[produceInvKey].totalWeight += itemWeightForInventory;
                    harvestDisplay = `1 ${namePrefix}${yieldInfo.name} (W: ${itemWeightForInventory.toFixed(2)}) from ${plantedInfo.name}`;
                } else {
                    harvestDisplay = `Unknown/unsellable yield from ${plantedInfo.name}`; msgType = 'error'; actualHarvestKey = null;
                }
            } else {
                let baseHarvestKeyForInv = plantedKey;
                let baseHarvestInfo = plantedInfo;

                if (plantedInfo.yields?.length > 0 && specialStatuses.length > 0) {
                    const yieldKey = plantedInfo.yields[Math.floor(Math.random() * plantedInfo.yields.length)];
                    baseHarvestInfo = CROP_DATA[yieldKey];
                    baseHarvestKeyForInv = yieldKey;
                    itemWeightForInventory = getRandomWeight(baseHarvestInfo.weightRange);
                    harvestDisplay = `1 ${namePrefix}${baseHarvestInfo.name} (W: ${itemWeightForInventory.toFixed(2)}) from ${plantedInfo.name}`;
                } else if (plantedInfo.sellPrice !== null) {
                    itemWeightForInventory = finalWeightMultiplier;
                    harvestDisplay = `1 ${namePrefix}${plantedInfo.name} (W: ${itemWeightForInventory.toFixed(2)})`;
                } else {
                    harvestDisplay = `${namePrefix}${plantedInfo.name} harvested, not storable/sellable.`; msgType = 'info';
                }

                if (baseHarvestInfo.sellPrice !== null) {
                    actualHarvestKey = baseHarvestKeyForInv;
                    const produceInvKey = `${inventoryKeyPrefix}${baseHarvestKeyForInv}`;
                    if (!gameState.inventory.produce[produceInvKey]) gameState.inventory.produce[produceInvKey] = { count: 0, totalWeight: 0.0, isFavorited: false };
                    gameState.inventory.produce[produceInvKey].count++;
                    gameState.inventory.produce[produceInvKey].totalWeight += itemWeightForInventory;
                } else if (!plantedInfo.yields) {
                    actualHarvestKey = null;
                }
            }
            if (specialStatuses.some(s => ['golden', 'cosmic', 'rainbow', 'moonlit', 'pollinated'].includes(s))) msgType = 'gold';

            p.state = 'empty'; p.crop = null; p.plantedTime = null; p.growDuration = null; p.specialStatuses = []; p.finalWeightMultiplier = null;

            if (!isBulkHarvest && harvestDisplay) addMessage(`Harvested ${harvestDisplay}.`, msgType);

            if (actualHarvestKey && CROP_DATA[actualHarvestKey]) {
                if (gameState.stats.harvested[actualHarvestKey] === undefined) gameState.stats.harvested[actualHarvestKey] = 0;
                gameState.stats.harvested[actualHarvestKey]++;
                updateQuestProgress('harvest', 1, actualHarvestKey);
                if (specialStatuses.includes('golden')) updateQuestProgress('harvest_golden', 1);

                // Check for new mutation achievements
                if (specialStatuses.includes('rainbow')) {
                    gameState.stats.mutationsHarvested.rainbow = (gameState.stats.mutationsHarvested.rainbow || 0) + 1;
                    checkAndGrantAchievement('harvest_rainbow');
                }
                if (specialStatuses.includes('cosmic')) {
                    gameState.stats.mutationsHarvested.cosmic = (gameState.stats.mutationsHarvested.cosmic || 0) + 1;
                    checkAndGrantAchievement('harvest_cosmic');
                }
                if (specialStatuses.includes('silver')) {
                    gameState.stats.mutationsHarvested.silver = (gameState.stats.mutationsHarvested.silver || 0) + 1;
                    checkAndGrantAchievement('harvest_silver');
                }
            }

            if (!isBulkHarvest) checkAllAchievements(); if (!isBulkHarvest) { const el = farmGridEl.querySelector(`.plot[data-plot-id="${id}"]`); if (el) { el.classList.add('plot-harvest-animate'); setTimeout(() => el.classList.remove('plot-harvest-animate'), 250); } updateUI(); } return true;
        }

        const harvestAllReadyCrops = () => { if (!gameState) return; let harvestedCount = 0; gameState.plots.forEach((p, i) => { if (p.state === 'ready' && !p.isLocked && harvestCrop(i, true)) harvestedCount++; }); if (harvestedCount > 0) { checkAllAchievements(); addMessage(`Harvested ${harvestedCount} ready crop${harvestedCount > 1 ? 's' : ''}!`, 'success'); updateUI(); } else { addMessage('No unlocked crops ready to harvest.', 'info'); } }

        const sellProduce = (key, qty = 1) => {
            if (!gameState || qty <= 0) return false;

            const itemData = gameState.inventory.produce[key];
            if (itemData?.isFavorited) return false;

            const hadSoldBefore = gameState.stats.hasSoldProduce;
            const { baseKey, sellMultiplier, displayPrefix, namePrefix, statusKeys } = parseItemKey(key);

            const baseInfo = CROP_DATA[baseKey];
            if (!baseInfo || baseInfo.sellPrice === null || !itemData) {
                addMessage(`Cannot sell ${namePrefix}${CROP_DATA[baseKey]?.name || baseKey}. Not found or unsellable.`, 'error', true); return false;
            }
            if (itemData.count < qty) {
                addMessage(`Not enough ${namePrefix}${baseInfo.name}.`, 'error', true); return false;
            }

            const avgWeight = itemData.count > 0 ? (itemData.totalWeight / itemData.count) : 1.0;
            let finalSellPrice = baseInfo.sellPrice * avgWeight * sellMultiplier * (gameState.rebirthMultiplier || 1.0);

            const rawTotalEarnings = finalSellPrice * qty;
            const roundedTotalEarnings = Math.ceil(rawTotalEarnings);

            itemData.count -= qty;
            itemData.totalWeight -= (avgWeight * qty);
            if (itemData.count <= 0) { itemData.count = 0; itemData.totalWeight = 0.0; }

            if (roundedTotalEarnings > 0) {
                gameState.money += roundedTotalEarnings;
                gameState.stats.totalMoneyEarned = (gameState.stats.totalMoneyEarned || 0) + roundedTotalEarnings;
                updateQuestProgress('earn_money', roundedTotalEarnings);
            }
            updateQuestProgress('sell_produce_type', qty, baseKey);
            updateQuestProgress('sell_any_produce', qty);

            gameState.stats.hasSoldProduce = true;
            let earningsText = `${roundedTotalEarnings.toFixed(0)}💰`;
            if (roundedTotalEarnings === 0) earningsText = "no money";
            if (statusKeys.length > 0 && baseInfo.sellPrice > 0 && roundedTotalEarnings > 0) earningsText += ` (${sellMultiplier.toFixed(1)}x value!)`;
            const weightText = `(Weight: ${avgWeight.toFixed(2)})`;
            const messageType = statusKeys.some(s => ['golden', 'cosmic', 'rainbow', 'moonlit', 'pollinated'].includes(s)) && roundedTotalEarnings > 0 ? 'gold' : 'success';

            addMessage(`Sold ${qty} ${namePrefix}${baseInfo.name} ${weightText} for ${earningsText}.`, messageType);

            if (!hadSoldBefore && roundedTotalEarnings > 0) showTip('firstSell', 'First sale! Keep selling for upgrades and seeds.');
            checkAllAchievements(); updateUI();
            return true;
        }

        const sellAllProduce = () => {
            if (!gameState) return;
            let itemsSoldCount = 0;
            let anySaleFailed = false;

            const produceToConsider = Object.keys(gameState.inventory.produce);

            produceToConsider.forEach(itemKey => {
                const itemData = gameState.inventory.produce[itemKey];
                if (itemData && itemData.count > 0 && !itemData.isFavorited) {
                    if (sellProduce(itemKey, itemData.count)) {
                        itemsSoldCount++;
                    } else {
                        anySaleFailed = true;
                    }
                }
            });

            if (itemsSoldCount > 0) {
                addMessage(`Attempted to sell all unfavorited produce. ${itemsSoldCount} item type(s) sold.`, 'info');
            } else if (!anySaleFailed) {
                addMessage("No unfavorited produce to sell.", 'info');
            }
            updateUI();
        }


        const buySeeds = (key, qty = 1) => {
            if (!gameState || qty <= 0) return;
            const info = CROP_DATA[key];
            if (!info || info.seedCost === null) {
                addMessage(`Cannot buy seeds for ${info?.name || key}.`, 'error', true);
                return;
            }
            if (!isCropUnlockedForRebirth(key)) {
                addMessage(`🔒 ${info.name} unlocks at rebirth ${getMinRebirthsToBuyCrop(key)}.`, 'error', true);
                return;
            }

            // Enforce limited stock per shop rotation
            if (!gameState.shopSeedStock) gameState.shopSeedStock = {};
            const available = Number.isFinite(gameState.shopSeedStock[key]) ? gameState.shopSeedStock[key] : Infinity;
            if (available <= 0) {
                addMessage(`${info.name} seeds are sold out until the shop refreshes.`, 'error', true);
                return;
            }

            const purchQty = Math.min(qty, available);
            const cost = info.seedCost * purchQty;

            if (cost > 0 && gameState.money < cost) {
                addMessage(`Not enough money. Need ${cost}💰.`, 'error', true);
                return;
            }

            if (cost > 0) gameState.money -= cost;
            gameState.inventory.seeds[key] = (gameState.inventory.seeds[key] || 0) + purchQty;

            if (Number.isFinite(available)) {
                gameState.shopSeedStock[key] = Math.max(0, available - purchQty);
            }

            const costText = cost === 0 ? "free" : `${cost}💰`;
            const qtyText = purchQty === qty ? purchQty : `${purchQty} (only ${purchQty} left in stock)`;
            addMessage(`Bought ${qtyText} ${info.name} seed${purchQty > 1 ? 's' : ''} for ${costText}.`, 'success');
            updateUI();
        }
        const buyPlot = () => { if (!gameState) return; if (gameState.totalPlots >= MAX_PLOTS) { addMessage("Max plots reached!", 'error', true); return; } const cost = calculatePlotCost(); if (gameState.money < cost) { addMessage(`Not enough money. Need ${cost}💰.`, 'error', true); return; } gameState.money -= cost; gameState.totalPlots++; gameState.plots.push({ id: gameState.plots.length, state: 'empty', crop: null, plantedTime: null, growDuration: null, specialStatuses: [], finalWeightMultiplier: null, gear: null }); addMessage(`Bought plot ${gameState.totalPlots} for ${cost}💰!`, 'success'); checkAllAchievements(); updateUI(); }
        const buyGrowthUpgrade = () => { if (!gameState) return; if (gameState.growthSpeedLevel >= MAX_GROWTH_LEVELS) { addMessage("Max growth speed!", 'error', true); return; } const cost = calculateGrowthUpgradeCost(); if (gameState.money < cost) { addMessage(`Not enough money. Need ${cost}💰.`, 'error', true); return; } gameState.money -= cost; gameState.growthSpeedLevel++; addMessage(`Growth speed Lvl ${gameState.growthSpeedLevel}! Crops grow ${((1 - calculateGrowthMultiplier()) * 100).toFixed(0)}% faster.`, 'success'); checkAllAchievements(); updateUI(); }

        const buyGear = (key, qty = 1) => {
            if (!gameState || qty <= 0) return;
            const info = GEAR_DATA[key];
            if (!info) { addMessage('Unknown gear.', 'error', true); return; }
            if (!gameState.shopCurrentlyAvailableGearKeys?.includes(key)) { addMessage(`${info.name} is out of stock!`, 'error', true); return; }
            if (!gameState.shopGearStock) gameState.shopGearStock = {};
            const hadMissingStock = !Number.isFinite(gameState.shopGearStock[key]);
            if (hadMissingStock) ensureShopGearStockForKey(key);
            let stockLeft = gameState.shopGearStock[key];
            // #region agent log
            if (hadMissingStock) fetch('http://127.0.0.1:7711/ingest/f0a6c53b-7ebe-41d3-94f8-ef8a60c84063',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'ef421f'},body:JSON.stringify({sessionId:'ef421f',location:'script.js:buyGear:missingStock',message:'gear had no finite stock row',data:{key,afterEnsure:Number.isFinite(stockLeft)?stockLeft:null},timestamp:Date.now(),hypothesisId:'H-gear-1'})}).catch(()=>{});
            // #endregion
            if (!Number.isFinite(stockLeft) || stockLeft <= 0) {
                addMessage(`${info.name} is sold out until the shop refreshes.`, 'error', true);
                gameState.shopCurrentlyAvailableGearKeys = gameState.shopCurrentlyAvailableGearKeys.filter(k => k !== key);
                delete gameState.shopGearStock[key];
                updateUI();
                return;
            }
            if (stockLeft < qty) { addMessage(`Not enough in stock. Only ${stockLeft} left!`, 'error', true); return; }
            const cost = info.cost * qty;
            if (gameState.money < cost) { addMessage(`Not enough money. Need ${formatMoney(cost)}💰.`, 'error', true); return; }
            gameState.money -= cost;
            gameState.shopGearStock[key] = stockLeft - qty;
            if (gameState.shopGearStock[key] <= 0) {
                gameState.shopCurrentlyAvailableGearKeys = gameState.shopCurrentlyAvailableGearKeys.filter(k => k !== key);
                delete gameState.shopGearStock[key];
            }
            if (!gameState.inventory.gears) gameState.inventory.gears = {};
            gameState.inventory.gears[key] = (gameState.inventory.gears[key] || 0) + qty;
            addMessage(`Bought ${qty} ${info.name} for ${formatMoney(cost)}💰.`, 'success');
            updateUI();
        };

        const selectGearToPlace = (key) => {
            if (!gameState) return;
            if (selectedGearToPlace === key) { selectedGearToPlace = null; addMessage('Gear deselected.', 'info'); }
            else {
                const info = GEAR_DATA[key];
                if (!info) return;
                if (!(gameState.inventory.gears[key] > 0)) { addMessage(`No ${info.name} in inventory!`, 'error', true); return; }
                selectedGearToPlace = key;
                gameState.selectedCropToPlant = null; // deselect seed
                addMessage(`Selected ${info.icon} ${info.name}. Click a plot to use it.`, 'info');
            }
            updateUI();
        };

        const placeGearOnPlot = (plotId) => {
            if (!gameState || !selectedGearToPlace) return false;
            const gearKey = selectedGearToPlace;
            const gearInfo = GEAR_DATA[gearKey];
            if (!gearInfo) return false;
            if (!(gameState.inventory.gears[gearKey] > 0)) { addMessage(`No ${gearInfo.name} left!`, 'error', true); selectedGearToPlace = null; updateUI(); return false; }

            if (gearInfo.type === 'splash') {
                // Splash: apply mutation to N random growing/ready crops
                const eligiblePlots = gameState.plots.filter(p => (p.state === 'growing' || p.state === 'ready') && !p.specialStatuses.includes(gearInfo.splashStatus));
                if (eligiblePlots.length === 0) { addMessage(`No eligible crops for ${gearInfo.name}!`, 'error', true); return false; }
                const shuffled = shuffleArray([...eligiblePlots]);
                const toApply = shuffled.slice(0, gearInfo.splashCount);
                toApply.forEach(p => {
                    if (!p.specialStatuses.includes(gearInfo.splashStatus)) {
                        p.specialStatuses.push(gearInfo.splashStatus);
                        p.specialStatuses.sort();
                    }
                });
                gameState.inventory.gears[gearKey]--;
                addMessage(`${gearInfo.icon} ${gearInfo.name} applied ${SPECIAL_STATUSES[gearInfo.splashStatus]?.icon || ''} ${SPECIAL_STATUSES[gearInfo.splashStatus]?.name || ''} to ${toApply.length} crop${toApply.length > 1 ? 's' : ''}!`, 'success');
                // Brief visual flash on affected plots
                toApply.forEach(p => {
                    const el = farmGridEl.querySelector(`.plot[data-plot-id="${p.id}"]`);
                    if (el) { el.classList.add('plot-plant-animate'); setTimeout(() => el.classList.remove('plot-plant-animate'), 500); }
                });
                updateUI();
                return true;
            }
            return false;
        };

        const useSelectedGearAll = () => {
            if (!gameState || !selectedGearToPlace) return false;
            const gearKey = selectedGearToPlace;
            const gearInfo = GEAR_DATA[gearKey];
            if (!gearInfo) return false;
            if (!(gameState.inventory.gears?.[gearKey] > 0)) { addMessage(`No ${gearInfo.name} left!`, 'error', true); selectedGearToPlace = null; updateUI(); return false; }

            if (gearInfo.type !== 'splash') {
                addMessage('This gear cannot be bulk-used yet.', 'error', true);
                return false;
            }

            let totalUsed = 0;
            let totalPlotsAffected = 0;
            while ((gameState.inventory.gears[gearKey] || 0) > 0) {
                const eligiblePlots = gameState.plots.filter(p => (p.state === 'growing' || p.state === 'ready') && !p.specialStatuses.includes(gearInfo.splashStatus));
                if (eligiblePlots.length === 0) break;
                const toApply = shuffleArray([...eligiblePlots]).slice(0, gearInfo.splashCount);
                toApply.forEach(p => {
                    if (!p.specialStatuses.includes(gearInfo.splashStatus)) {
                        p.specialStatuses.push(gearInfo.splashStatus);
                        p.specialStatuses.sort();
                        totalPlotsAffected++;
                    }
                });
                gameState.inventory.gears[gearKey]--;
                totalUsed++;
            }

            if (totalUsed === 0) {
                addMessage(`No eligible crops for ${gearInfo.name}!`, 'error', true);
                return false;
            }

            addMessage(`${gearInfo.icon} ${gearInfo.name} used x${totalUsed}: applied ${SPECIAL_STATUSES[gearInfo.splashStatus]?.icon || ''} ${SPECIAL_STATUSES[gearInfo.splashStatus]?.name || ''} to ${totalPlotsAffected} crop${totalPlotsAffected !== 1 ? 's' : ''}!`, 'success');
            updateUI();
            return true;
        };

        const getPlantableCropsSorted = (onlyUnlockedForRebirth = false) => {
            let keys = Object.keys(CROP_DATA)
                .filter(k => CROP_DATA[k].seedCost !== null)
                .sort((a, b) => {
                    const cropA = CROP_DATA[a];
                    const cropB = CROP_DATA[b];
                    const costA = cropA.seedCost ?? Infinity;
                    const costB = cropB.seedCost ?? Infinity;
                    if (costA === costB) {
                        return (cropA.name || a).localeCompare(cropB.name || b);
                    }
                    return costA - costB;
                });
            if (onlyUnlockedForRebirth) {
                keys = keys.filter(k => isCropUnlockedForRebirth(k));
            }
            return keys;
        };

        const ensureShopSeedStockForKey = (key) => {
            if (!gameState || !CROP_DATA[key] || CROP_DATA[key].seedCost === null) return;
            if (!gameState.shopSeedStock) gameState.shopSeedStock = {};
            if (Number.isFinite(gameState.shopSeedStock[key])) return;
            const crop = CROP_DATA[key];
            const rarity = crop.rarity || 'common';
            const baseLimit = SHOP_STOCK_LIMITS[rarity] ?? SHOP_STOCK_LIMITS.default;
            const variationFactor = 0.9 + Math.random() * 0.2;
            gameState.shopSeedStock[key] = Math.max(5, Math.round(baseLimit * variationFactor));
        };

        const ensureShopGearStockForKey = (key) => {
            if (!gameState || !GEAR_DATA[key]) return;
            if (!gameState.shopGearStock) gameState.shopGearStock = {};
            if (Number.isFinite(gameState.shopGearStock[key])) return;
            const g = GEAR_DATA[key];
            const rarity = g.rarity || 'common';
            const baseLimit = GEAR_STOCK_LIMITS[rarity] ?? GEAR_STOCK_LIMITS.default;
            const variationFactor = 0.9 + Math.random() * 0.2;
            gameState.shopGearStock[key] = Math.max(1, Math.round(baseLimit * variationFactor));
        };

        const refreshShopStock = () => {
            if (!gameState) return;

            const allPlantableSorted = getPlantableCropsSorted(true);
            if (allPlantableSorted.length === 0) {
                gameState.shopCurrentlyAvailableSeedKeys = [];
                gameState.shopNextRefreshTimestamp = Date.now() + getRandomDuration([SHOP_REFRESH_MIN, SHOP_REFRESH_MAX]);
                addMessage("🛒 Shop has no seeds to stock currently.", 'info');
                // #region agent log
                fetch('http://127.0.0.1:7711/ingest/f0a6c53b-7ebe-41d3-94f8-ef8a60c84063',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'ef421f'},body:JSON.stringify({sessionId:'ef421f',location:'script.js:refreshShopStock:emptyPlantable',message:'no plantable crops',data:{plantableLen:0},timestamp:Date.now(),hypothesisId:'H1'})}).catch(()=>{});
                // #endregion
                updateUI();
                return;
            }

            let finalStock = [];

            const ultraRareCandidates = allPlantableSorted.filter(k => CROP_DATA[k].rarity === 'ultra_rare');
            const commonPool = allPlantableSorted.filter(k => (!CROP_DATA[k].rarity || CROP_DATA[k].rarity === 'common') && !ultraRareCandidates.includes(k));
            const normalRarePool = allPlantableSorted.filter(k => CROP_DATA[k].rarity === 'rare' && !ultraRareCandidates.includes(k));

            const alwaysAvailableItems = commonPool.slice(0, ALWAYS_AVAILABLE_SHOP_ITEMS);
            finalStock.push(...alwaysAvailableItems);

            let ultraRaresStockedCount = 0;
            const shuffledUltraRare = shuffleArray([...ultraRareCandidates]);
            for (const key of shuffledUltraRare) {
                if (ultraRaresStockedCount < ULTRA_RARE_SLOTS_IN_SHOP) {
                    if (Math.random() < (CROP_DATA[key].stockChance || 0.20)) {
                        if (!finalStock.includes(key)) {
                            finalStock.push(key);
                            ultraRaresStockedCount++;
                        }
                    }
                } else {
                    break;
                }
            }

            let rotatingPoolCandidates = [
                ...normalRarePool,
                ...commonPool.filter(k => !alwaysAvailableItems.includes(k))
            ];
            rotatingPoolCandidates = rotatingPoolCandidates.filter(k => !finalStock.includes(k));
            shuffleArray(rotatingPoolCandidates);

            const slotsForNormalRotation = NORMAL_RARE_ROTATING_SLOTS;
            let normalRotatingStockedCount = 0;

            for (const key of rotatingPoolCandidates) {
                if (normalRotatingStockedCount < slotsForNormalRotation) {
                    if (!finalStock.includes(key)) {
                        finalStock.push(key);
                        normalRotatingStockedCount++;
                    }
                } else {
                    break;
                }
            }

            gameState.shopCurrentlyAvailableSeedKeys = [...new Set(finalStock)];

            // Initialize per-item stock counts for the current shop rotation (with slight randomness)
            gameState.shopSeedStock = {};
            gameState.shopCurrentlyAvailableSeedKeys.forEach(key => {
                const crop = CROP_DATA[key];
                if (!crop || crop.seedCost === null) return;
                const rarity = crop.rarity || 'common';
                const baseLimit = SHOP_STOCK_LIMITS[rarity] ?? SHOP_STOCK_LIMITS.default;
                const variationFactor = 0.9 + Math.random() * 0.2; // 0.9x - 1.1x of base
                const randomizedLimit = Math.max(5, Math.round(baseLimit * variationFactor));
                gameState.shopSeedStock[key] = randomizedLimit;
            });

            // Force-add event crops that are active during current weather
            if (gameState.currentWeather) {
                Object.keys(CROP_DATA).forEach(k => {
                    const c = CROP_DATA[k];
                    if (c.eventWeather === gameState.currentWeather && c.seedCost !== null && !gameState.shopCurrentlyAvailableSeedKeys.includes(k)) {
                        gameState.shopCurrentlyAvailableSeedKeys.push(k);
                    }
                });
            }
            gameState.shopCurrentlyAvailableSeedKeys.forEach(key => ensureShopSeedStockForKey(key));

            const allGears = Object.keys(GEAR_DATA);
            gameState.shopCurrentlyAvailableGearKeys = allGears.filter(k => Math.random() < (GEAR_DATA[k].stockChance || 0.8));
            gameState.shopGearStock = {};
            gameState.shopCurrentlyAvailableGearKeys.forEach(k => {
                const g = GEAR_DATA[k];
                const rarity = g.rarity || 'common';
                const baseLimit = GEAR_STOCK_LIMITS[rarity] ?? GEAR_STOCK_LIMITS.default;
                const variationFactor = 0.9 + Math.random() * 0.2;
                gameState.shopGearStock[k] = Math.max(1, Math.round(baseLimit * variationFactor));
            });
            if (gameState.shopCurrentlyAvailableGearKeys.length === 0 && allGears.length > 0) {
                const shuffled = shuffleArray([...allGears]);
                const n = Math.min(4, shuffled.length);
                for (let i = 0; i < n; i++) {
                    const k = shuffled[i];
                    gameState.shopCurrentlyAvailableGearKeys.push(k);
                    const g = GEAR_DATA[k];
                    const rarity = g.rarity || 'common';
                    const baseLimit = GEAR_STOCK_LIMITS[rarity] ?? GEAR_STOCK_LIMITS.default;
                    const variationFactor = 0.9 + Math.random() * 0.2;
                    gameState.shopGearStock[k] = Math.max(1, Math.round(baseLimit * variationFactor));
                }
            }

            gameState.shopNextRefreshTimestamp = Date.now() + getRandomDuration([SHOP_REFRESH_MIN, SHOP_REFRESH_MAX]);

            addMessage("🛒 Shop has restocked its items!", 'info');
            // #region agent log
            fetch('http://127.0.0.1:7711/ingest/f0a6c53b-7ebe-41d3-94f8-ef8a60c84063',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'ef421f'},body:JSON.stringify({sessionId:'ef421f',location:'script.js:refreshShopStock:end',message:'shop restock',data:{seedKeyCount:gameState.shopCurrentlyAvailableSeedKeys?.length,stockKeys:Object.keys(gameState.shopSeedStock||{}).length,gearKeys:gameState.shopCurrentlyAvailableGearKeys?.length},timestamp:Date.now(),hypothesisId:'H1'})}).catch(()=>{});
            // #endregion
            updateUI();
        };


        const validateAndRefreshShopStock = () => {
            if (!gameState) return;
            let needsRefresh = false;
            if (Date.now() >= gameState.shopNextRefreshTimestamp) {
                needsRefresh = true;
            } else {
                const validKeys = gameState.shopCurrentlyAvailableSeedKeys.filter(key =>
                    CROP_DATA[key] && CROP_DATA[key].seedCost !== null && isCropUnlockedForRebirth(key)
                );
                if (validKeys.length !== gameState.shopCurrentlyAvailableSeedKeys.length) {
                    needsRefresh = true;
                }
                gameState.shopCurrentlyAvailableSeedKeys = validKeys;
            }

            if (needsRefresh) {
                refreshShopStock();
            } else {
                updateUI(); // Update UI even if not refreshed, for timer
            }
        };

        const getStartOfUTCDay = (timestamp) => {
            const d = new Date(timestamp);
            d.setUTCHours(0, 0, 0, 0);
            return d.getTime();
        };

        const checkAndResetDailyQuests = () => {
            if (!gameState || isModActive) return;
            const now = Date.now();
            const currentDayStart = getStartOfUTCDay(now);
            const lastResetDayStart = getStartOfUTCDay(gameState.lastQuestResetTimestamp);

            if (currentDayStart > lastResetDayStart) {
                generateNewDailyQuests();
            } else if (!gameState.activeDailyQuests || gameState.activeDailyQuests.length === 0) {
                generateNewDailyQuests();
            }
        };

        const generateNewDailyQuests = (count = DAILY_QUEST_COUNT) => {
            if (!gameState || isModActive) return;

            const oldClaimableQuests = gameState.activeDailyQuests.filter(q => q.completed && !q.claimed);
            gameState.activeDailyQuests = oldClaimableQuests;

            const availableQuestDefs = QUEST_DEFINITIONS.filter(def =>
                !gameState.activeDailyQuests.some(aq => aq.questId === def.id)
            );
            shuffleArray(availableQuestDefs);

            const newQuestsNeeded = Math.max(0, count - gameState.activeDailyQuests.length);

            for (let i = 0; i < newQuestsNeeded && i < availableQuestDefs.length; i++) {
                const questDef = availableQuestDefs[i];
                gameState.activeDailyQuests.push({
                    questId: questDef.id,
                    progress: 0,
                    completed: false,
                    claimed: false
                });
            }
            gameState.lastQuestResetTimestamp = Date.now();
            addMessage("📅 New Daily Quests available!", 'info');
            updateUI();
        };

        const updateQuestProgress = (actionType, value, targetKey = null) => {
            if (!gameState || !gameState.activeDailyQuests || isModActive) return;
            let questsUpdated = false;

            gameState.activeDailyQuests.forEach(quest => {
                if (quest.completed && !quest.claimed) return;
                if (quest.claimed) return;

                const questDef = QUEST_DEFINITIONS.find(qd => qd.id === quest.questId);
                if (!questDef) return;

                let progressMade = false;
                switch (questDef.type) {
                    case 'harvest': if (actionType === 'harvest' && questDef.targetCrop === targetKey) { quest.progress = Math.min(quest.progress + value, questDef.targetAmount); progressMade = true; } break;
                    case 'harvest_golden': if (actionType === 'harvest_golden') { quest.progress = Math.min(quest.progress + value, questDef.targetAmount); progressMade = true; } break;
                    case 'plant': if (actionType === 'plant' && questDef.targetCrop === targetKey) { quest.progress = Math.min(quest.progress + value, questDef.targetAmount); progressMade = true; } break;
                    case 'plant_any': if (actionType === 'plant_any') { quest.progress = Math.min(quest.progress + value, questDef.targetAmount); progressMade = true; } break;
                    case 'earn_money': if (actionType === 'earn_money') { quest.progress = Math.min(quest.progress + value, questDef.targetAmount); progressMade = true; } break;
                    case 'sell_produce_type': if (actionType === 'sell_produce_type' && questDef.targetCrop === targetKey) { quest.progress = Math.min(quest.progress + value, questDef.targetAmount); progressMade = true; } break;
                    case 'sell_any_produce': if (actionType === 'sell_any_produce') { quest.progress = Math.min(quest.progress + value, questDef.targetAmount); progressMade = true; } break;
                }

                if (progressMade && quest.progress >= questDef.targetAmount && !quest.completed) {
                    quest.completed = true;
                    addMessage(`Quest Completed: ${questDef.title}! Claim your reward.`, 'success', true);
                    questsUpdated = true;
                } else if (progressMade) {
                    questsUpdated = true;
                }
            });

            if (questsUpdated) updateUI();
        };

        const claimQuestReward = (questArrayIndex) => {
            if (!gameState || !gameState.activeDailyQuests[questArrayIndex] || isModActive) return;
            const quest = gameState.activeDailyQuests[questArrayIndex];
            const questDef = QUEST_DEFINITIONS.find(qd => qd.id === quest.questId);

            if (!questDef || !quest.completed || quest.claimed) {
                addMessage("Cannot claim reward for this quest.", 'error', true);
                return;
            }

            let rewardMessage = `Claimed reward for "${questDef.title}": `;
            if (questDef.rewards.money) {
                gameState.money += questDef.rewards.money;
                rewardMessage += `${questDef.rewards.money}💰 `;
            }
            if (questDef.rewards.seeds) {
                Object.entries(questDef.rewards.seeds).forEach(([seedKey, amount]) => {
                    if (CROP_DATA[seedKey] && CROP_DATA[seedKey].seedCost !== null) {
                        gameState.inventory.seeds[seedKey] = (gameState.inventory.seeds[seedKey] || 0) + amount;
                        rewardMessage += `+${amount} ${CROP_DATA[seedKey].icon} `;
                    }
                });
            }
            quest.claimed = true;
            addMessage(rewardMessage, 'success');
            updateUI();
        };

        const changeWeather = () => {
            if (!gameState) return;
            const possibleNextWeathers = WEATHER_TYPE_KEYS.filter(w => w !== gameState.currentWeather);
            const nextWeatherKey = possibleNextWeathers[Math.floor(Math.random() * possibleNextWeathers.length)];

            // Remove event crops from previous weather
            if (gameState.currentWeather) {
                Object.keys(CROP_DATA).forEach(k => {
                    if (CROP_DATA[k].eventWeather && CROP_DATA[k].eventWeather !== nextWeatherKey) {
                        const idx = gameState.shopCurrentlyAvailableSeedKeys.indexOf(k);
                        if (idx > -1) gameState.shopCurrentlyAvailableSeedKeys.splice(idx, 1);
                    }
                });
            }

            gameState.currentWeather = nextWeatherKey;
            const weatherConf = WEATHER_CONFIG[nextWeatherKey];
            gameState.weatherChangeTimestamp = Date.now() + getRandomDuration(weatherConf.duration_ms);

            // Add event crops for new weather
            Object.keys(CROP_DATA).forEach(k => {
                const c = CROP_DATA[k];
                if (c.eventWeather === nextWeatherKey && c.seedCost !== null && !gameState.shopCurrentlyAvailableSeedKeys.includes(k)) {
                    gameState.shopCurrentlyAvailableSeedKeys.push(k);
                }
            });
            gameState.shopCurrentlyAvailableSeedKeys.forEach(key => ensureShopSeedStockForKey(key));
            // #region agent log
            const sk = (gameState.shopCurrentlyAvailableSeedKeys || []).filter(k => CROP_DATA[k]?.eventWeather);
            const miss = sk.filter(k => !Number.isFinite(gameState.shopSeedStock?.[k]));
            fetch('http://127.0.0.1:7711/ingest/f0a6c53b-7ebe-41d3-94f8-ef8a60c84063',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'ef421f'},body:JSON.stringify({sessionId:'ef421f',location:'script.js:changeWeather:after',message:'event seeds stock gap',data:{eventKeys:sk.length,missingStockFor:miss},timestamp:Date.now(),hypothesisId:'H3'})}).catch(()=>{});
            // #endregion

            addMessage(`Weather changed to: ${weatherConf.name}!`, 'info', true);
            updateUI();
        };

        const gameLoop = () => {
            if (!gameState) return;
            const now = Date.now();
            let needsUpdate = false;

            if (now >= gameState.weatherChangeTimestamp) {
                changeWeather();
                needsUpdate = true;
            }

            const deltaMs = now - (gameState.lastUpdate || now);

            gameState.plots.forEach(p => {
                if (p.state === 'growing' && p.growDuration) {
                    let environmentalSpeedBoost = 1.0;
                    if (gameState.currentWeather === 'gentle_rain' && WEATHER_CONFIG.gentle_rain.growthModifier) {
                        environmentalSpeedBoost = WEATHER_CONFIG.gentle_rain.growthModifier;
                    }

                    if (p.accruedGrowth === undefined) {
                        p.accruedGrowth = now - (p.plantedTime || now);
                        p.plantedTime = undefined; // migrate old saves
                    }

                    p.accruedGrowth += deltaMs * environmentalSpeedBoost;

                    if (p.accruedGrowth >= p.growDuration) {
                        p.state = 'ready';
                        p.plantedTime = null;
                        needsUpdate = true;

                        const cropInfo = CROP_DATA[p.crop];
                        let readyMsg = `${cropInfo ? cropInfo.icon : '?'} ${cropInfo ? cropInfo.name : 'Crop'} in plot ${p.id + 1} ready!`;
                        if (p.specialStatuses.length > 0) {
                            const iconPrefix = p.specialStatuses.map(s => SPECIAL_STATUSES[s]?.icon || '').join('');
                            readyMsg = `${iconPrefix}${readyMsg}`;
                        }
                        addMessage(readyMsg, 'info');
                    }
                }
            });
            gameState.lastUpdate = now;

            if (shopRefreshTimerEl) {
                const timeLeft = Math.max(0, gameState.shopNextRefreshTimestamp - now);
                shopRefreshTimerEl.textContent = `(Refreshes in: ${formatTime(timeLeft)})`;
            }
            if (now >= gameState.shopNextRefreshTimestamp) {
                refreshShopStock();
                needsUpdate = true;
            }

            if (!isModActive) {
                checkAndResetDailyQuests();
                if (questResetTimerEl) {
                    const nextReset = getStartOfUTCDay(now) + (24 * 60 * 60 * 1000);
                    const timeLeftForQuestReset = Math.max(0, nextReset - now);
                    questResetTimerEl.textContent = `(Resets in: ${formatTime(timeLeftForQuestReset, false)})`;
                }
                if (questStatusTextEl) questStatusTextEl.textContent = "";
            } else {
                if (questResetTimerEl) questResetTimerEl.textContent = "";
                if (questStatusTextEl) questStatusTextEl.textContent = "(Disabled with active mod)";
            }

            const totalHarvests = Object.values(gameState.stats.harvested).reduce((a, b) => a + b, 0); if (gameState.money >= 20 && totalHarvests >= 1 && !gameState.stats.hasSoldProduce) showTip('checkMarket', 'Got produce? Check Shop 🛒 to sell, buy seeds, or get upgrades.'); const nextPlotCost = calculatePlotCost(); if (gameState.totalPlots < 5 && gameState.money >= nextPlotCost) showTip('plotUpgradeAfford', `Expand farm! Buy Plot for ${nextPlotCost}💰 in Shop 🛒.`); const nextGrowthCost = calculateGrowthUpgradeCost(); if (gameState.growthSpeedLevel < 2 && gameState.money >= nextGrowthCost && gameState.totalPlots > INITIAL_PLOTS) showTip('growthUpgradeAfford', `Speed up! Improve Growth for ${nextGrowthCost}💰 in Shop 🛒.`);

            // Safety net: if the player is broke and has no crops, grant a bailout once per situation.
            const hasAnySeeds = Object.values(gameState.inventory.seeds || {}).some(count => count > 0);
            const hasAnyProduce = Object.values(gameState.inventory.produce || {}).some(p => p && p.count > 0);
            const hasAnyPlantedCrops = Array.isArray(gameState.plots) && gameState.plots.some(p => p && p.state !== 'empty');
            if (gameState.money < 5 && !hasAnySeeds && !hasAnyProduce && !hasAnyPlantedCrops) {
                gameState.money += 100;
                addMessage("You were out of options, so the co-op chipped in: +100💰 rescue funds.", 'success', true);
                needsUpdate = true;
            }

            if (needsUpdate) updateUI(); else updateProgressBars();
        }
        const calculateGrowthProgress = (p) => {
            if (p?.state !== 'growing' || !p.growDuration) return 0;
            if (p.accruedGrowth !== undefined) {
                return Math.min(1, Math.max(0, p.accruedGrowth / p.growDuration));
            }
            let environmentalSpeedBoost = 1.0;
            if (gameState.currentWeather === 'gentle_rain' && WEATHER_CONFIG.gentle_rain.growthModifier) {
                environmentalSpeedBoost = WEATHER_CONFIG.gentle_rain.growthModifier;
            }
            const finalEffectiveGrowDuration = p.growDuration / environmentalSpeedBoost;
            const timeElapsed = Date.now() - p.plantedTime;
            return Math.min(1, Math.max(0, timeElapsed / finalEffectiveGrowDuration));
        };

        const updateProgressBars = () => { farmGridEl?.querySelectorAll('.plot.growing .progress-bar').forEach(bar => { const plotEl = bar.closest('.plot'); const plotId = parseInt(plotEl?.dataset.plotId, 10); if (!isNaN(plotId) && gameState?.plots[plotId]) bar.style.width = `${calculateGrowthProgress(gameState.plots[plotId]) * 100}%`; }); updateActiveTooltip(); }

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

                    // Show sell multiplier from statuses
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
        }
        const showPlotTooltip = (plotId, event) => {
            if (!gameState || !plotTooltipEl) return;
            const plotData = gameState.plots[plotId];
            if (!plotData) return;
            if (plotData.state !== 'growing' && plotData.state !== 'ready') { hidePlotTooltip(); return; }
            activeTooltipPlotId = plotId; updateActiveTooltip(); movePlotTooltip(event); plotTooltipEl.classList.add('visible');
        }
        const hidePlotTooltip = () => { if (plotTooltipEl) plotTooltipEl.classList.remove('visible'); if (tooltipWeightPotentialEl) tooltipWeightPotentialEl.style.display = 'none'; if (tooltipWeightActualEl) tooltipWeightActualEl.style.display = 'none'; if (tooltipSellMultiplierEl) tooltipSellMultiplierEl.style.display = 'none'; activeTooltipPlotId = null; }
        const movePlotTooltip = (event) => { if (!plotTooltipEl?.classList.contains('visible')) return; const offsetX = 15, offsetY = 10; let x = event.clientX + offsetX, y = event.clientY + offsetY; const tooltipRect = plotTooltipEl.getBoundingClientRect(), bodyRect = document.body.getBoundingClientRect(); if (x + tooltipRect.width > bodyRect.width) x = event.clientX - tooltipRect.width - offsetX; if (y + tooltipRect.height > bodyRect.height) y = event.clientY - tooltipRect.height - offsetY; plotTooltipEl.style.left = `${x}px`; plotTooltipEl.style.top = `${y}px`; }

        const MAX_LOCKED_PRODUCE = 5;
        const toggleLockProduce = (itemKey) => {
            if (!gameState || !gameState.inventory.produce[itemKey]) return;
            const item = gameState.inventory.produce[itemKey];
            const currentlyLocked = !!item.isFavorited;

            if (!currentlyLocked) {
                const lockedCount = Object.values(gameState.inventory.produce)
                    .filter(v => v && v.isFavorited).length;
                if (lockedCount >= MAX_LOCKED_PRODUCE) {
                    addMessage(`You can only lock up to ${MAX_LOCKED_PRODUCE} items. Unlock something first.`, 'error', true);
                    return;
                }
            }

            item.isFavorited = !currentlyLocked;
            updateUI();
        };

        const inventoryTooltipEl = document.getElementById('inventory-tooltip');
        const showInventoryTooltip = (li, event) => {
            if (!inventoryTooltipEl) return;
            const ttName = li.dataset.ttName || '';
            const ttDetail = li.dataset.ttDetail || '';
            const ttWeight = li.dataset.ttWeight || '';
            let html = `<div class="inv-tt-name">${ttName}</div>`;
            html += `<div class="inv-tt-detail">${ttDetail.replace(/\|/g, '<br>')}</div>`;
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

        let uiUpdateTimeout = null;
        let lastUpdateTime = 0;
        const updateUI = () => {
            const now = Date.now();
            if (now - lastUpdateTime < 50) {
                if (!uiUpdateTimeout) uiUpdateTimeout = setTimeout(() => { uiUpdateTimeout = null; updateUI(); }, 50 - (now - lastUpdateTime));
                return;
            }
            lastUpdateTime = now;

            // Prevent scroll jumping when rewriting innerHTML of focused elements
            const activeTag = document.activeElement?.tagName;
            if (document.activeElement && (activeTag === 'LI' || activeTag === 'BUTTON' || document.activeElement.classList.contains('plant-button'))) {
                document.activeElement.blur();
            }

            if (!gameState) { console.error("UI Update Fail: No game state."); return; }
            const farmNameHeadingEl = document.getElementById('farm-name');
            if (farmNameHeadingEl) {
                farmNameHeadingEl.textContent = gameState.farmName || 'Your Farm';
            }

            moneyEl.textContent = formatMoney(gameState.money);
            moneyEl.title = gameState.money.toLocaleString() + ' coins';

            if (weatherDisplayEl) {
                let weatherText = "";
                if (WEATHER_CONFIG[gameState.currentWeather]) {
                    const weatherInfo = WEATHER_CONFIG[gameState.currentWeather];
                    weatherText = `Weather: ${weatherInfo.icon} ${weatherInfo.name}`;
                } else {
                    weatherText = "Weather: Unknown";
                }
                weatherDisplayEl.innerHTML = weatherText;
            }


            const generateInventoryList = (items, type) => {
                const sorted = Object.entries(items)
                    .map(([key, data]) => {
                        const { baseKey, displayPrefix, statusKeys, sellMultiplier } = parseItemKey(key);
                        const baseItemInfo = CROP_DATA[baseKey];
                        let name = baseItemInfo?.name || baseKey;
                        let icon = baseItemInfo?.icon || '?';
                        if (type === 'seeds' && (data <= 0 || baseItemInfo?.seedCost === null)) return null;
                        if (type === 'produce' && data.count <= 0) return null;
                        return { key, data, name, icon, displayPrefix, baseKey, statusKeys, sellMultiplier };
                    })
                    .filter(item => item)
                    .sort((a, b) => {
                        if (type === 'seeds') {
                            const costA = CROP_DATA[a.baseKey]?.seedCost ?? Infinity;
                            const costB = CROP_DATA[b.baseKey]?.seedCost ?? Infinity;
                            if (costA !== costB) return costA - costB;
                        }
                        const nC = a.name.localeCompare(b.name);
                        if (nC !== 0) return nC;
                        return a.key.localeCompare(b.key);
                    });
                if (sorted.length === 0) {
                    const noMsg = type === 'seeds' ? 'No seeds. Buy some from the crops shop!' : 'No produce. Harvest some crops!';
                    return `<li class="empty-grid-msg">${noMsg}</li>`;
                }
                return sorted.map(item => {
                    const isLocked = type === 'produce' && item.data.isFavorited;
                    const count = type === 'seeds' ? item.data : item.data.count;
                    const avgWeight = (type === 'produce' && item.data.count > 0 && item.data.totalWeight) ? (item.data.totalWeight / item.data.count).toFixed(2) : null;
                    const statusIcons = item.statusKeys.length > 0 ? item.statusKeys.map(s => SPECIAL_STATUSES[s]?.icon).filter(Boolean).join('') + ' ' : '';
                    const statusNames = item.statusKeys.length > 0 ? item.statusKeys.map(s => SPECIAL_STATUSES[s]?.name).filter(Boolean).join(', ') + ' ' : '';
                    let ttName = `${statusIcons}${statusNames}${item.name}`;
                    let ttDetail = `Count: ${count}`;
                    if (avgWeight) ttDetail += ` | Avg Weight: ${avgWeight}`;
                    if (type === 'produce' && item.sellMultiplier > 1) ttDetail += ` | Sell Bonus: ${item.sellMultiplier.toFixed(1)}x`;
                    if (type === 'produce') {
                        const baseInfo = CROP_DATA[item.baseKey];
                        if (baseInfo?.sellPrice) {
                            const wt = avgWeight ? parseFloat(avgWeight) : 1.0;
                            const unitPrice = Math.ceil(baseInfo.sellPrice * wt * item.sellMultiplier * (gameState.rebirthMultiplier || 1.0));
                            ttDetail += ` | Sell: ${formatMoney(unitPrice)}💰 each`;
                        }
                    }
                    if (isLocked) ttDetail += ' | 🔒 Locked';
                    const displayName = (item.statusKeys.length > 0 ? item.statusKeys.map(s => SPECIAL_STATUSES[s]?.name).filter(Boolean).join(' ') + ' ' : '') + item.name;

                    // Seed tile: show selected state and allow click to select for planting
                    if (type === 'seeds') {
                        const rbLocked = !isCropUnlockedForRebirth(item.baseKey);
                        if (rbLocked) ttDetail += ` | 🔒 Unlocks at rebirth ${getMinRebirthsToBuyCrop(item.baseKey)}`;
                        const isSelected = gameState.selectedCropToPlant === item.key;
                        const hasStock = count > 0;
                        let liClass = '';
                        if (rbLocked) liClass = 'seed-rebirth-locked';
                        else if (isSelected) liClass = 'seed-selected';
                        else if (!hasStock) liClass = 'seed-no-stock';
                        const nameHtml = rbLocked ? `🔒 ${displayName}` : displayName;
                        return `<li data-item-key="${item.key}" data-inv-type="${type}" data-tt-name="${ttName}" data-tt-detail="${ttDetail}" class="${liClass}"><span class="inv-tile-icon">${item.displayPrefix}${item.icon}</span><span class="inv-tile-name">${nameHtml}</span><span class="inv-tile-count">x${count}</span></li>`;
                    }

                    // Produce tile: show sell price under the count
                    let sellPriceHtml = '';
                    if (type === 'produce') {
                        const baseInfo = CROP_DATA[item.baseKey];
                        if (baseInfo?.sellPrice) {
                            const wt = avgWeight ? parseFloat(avgWeight) : 1.0;
                            const unitPrice = Math.ceil(baseInfo.sellPrice * wt * item.sellMultiplier * (gameState.rebirthMultiplier || 1.0));
                            sellPriceHtml = `<span class="inv-tile-sell">${formatMoney(unitPrice)}💰</span>`;
                        }
                    }

                    const lockedLabelAttr = isLocked ? ' data-locked-label="[Locked]"' : '';

                    return `<li data-item-key="${item.key}" data-inv-type="${type}" data-tt-name="${ttName}" data-tt-detail="${ttDetail}"${avgWeight ? ` data-tt-weight="${avgWeight}"` : ''}>${isLocked ? '<span class="inv-tile-fav">🔒</span>' : ''}<span class="inv-tile-icon">${item.displayPrefix}${item.icon}</span><span class="inv-tile-name"${lockedLabelAttr}>${displayName}</span><span class="inv-tile-count">x${count}</span>${sellPriceHtml}</li>`;
                }).join('');
            };

            // Build a unified list of seed and gear entries for the main inventory list.
            const seedHtml = generateInventoryList(gameState.inventory.seeds, 'seeds');
            let gearHtml = '';
            if (!gameState.inventory.gears) gameState.inventory.gears = {};
            const gearEntries = Object.keys(GEAR_DATA).filter(k => (gameState.inventory.gears[k] || 0) > 0);
            if (gearEntries.length > 0) {
                gearHtml = gearEntries.map(k => {
                    const gInfo = GEAR_DATA[k];
                    const count = gameState.inventory.gears[k];
                    const isSelected = selectedGearToPlace === k;
                    const selectedClass = isSelected ? 'gear-selected' : '';
                    const safeName = gInfo?.name || k;
                    const safeDesc = gInfo?.description || '';
                    return `<li class="gear-inv-item ${selectedClass}" data-gear-key="${k}" data-inv-type="gear" data-tt-name="${safeName}" data-tt-detail="${safeDesc}"><span class="inv-tile-icon">${gInfo.icon}</span><span class="inv-tile-name">${safeName}</span><span class="inv-tile-count">x${count}</span></li>`;
                }).join('');
            }

            seedInventoryEl.innerHTML = [seedHtml, gearHtml].filter(Boolean).join('') || '<li class="empty-grid-msg">No seeds or gears yet.</li>';
            produceInventoryEl.innerHTML = generateInventoryList(gameState.inventory.produce, 'produce');

            let anyPlotsReady = false; farmGridEl.innerHTML = ''; for (let i = 0; i < MAX_PLOTS; i++) {
                const plotEl = document.createElement('div'); plotEl.classList.add('plot'); plotEl.dataset.plotId = i; const content = document.createElement('span'); content.classList.add('plot-content'); if (i < gameState.totalPlots) {
                    const plotData = gameState.plots[i]; if (!plotData) { console.error(`Plot data error ${i}`); content.innerHTML = '❓'; plotEl.classList.add('empty'); } else {
                        const cropInfo = CROP_DATA[plotData.crop]; plotEl.className = 'plot'; plotEl.classList.add(plotData.state);
                        const specialStatuses = plotData.specialStatuses || [];
                        if (plotData.state === 'growing' || plotData.state === 'ready') {
                            if (specialStatuses.includes('moonlit')) plotEl.classList.add('plot-is-moonlit');
                            if (specialStatuses.includes('scorched')) plotEl.classList.add('plot-is-scorched');
                            if (specialStatuses.includes('golden') || specialStatuses.includes('pollinated')) plotEl.classList.add('plot-is-warm');
                            if (specialStatuses.includes('frozen') || specialStatuses.includes('wet')) plotEl.classList.add('plot-is-cool');
                            if (specialStatuses.includes('shocked')) plotEl.classList.add('plot-is-shocked');
                            if (specialStatuses.includes('rainbow')) plotEl.classList.add('plot-is-rainbow');
                            if (specialStatuses.includes('cosmic')) plotEl.classList.add('plot-is-cosmic');
                            if (specialStatuses.includes('silver')) plotEl.classList.add('plot-is-silver');
                            if (plotData.isLocked) plotEl.classList.add('plot-fruit-locked');
                        }
                        let iconPrefix = "";
                        specialStatuses.forEach(sKey => iconPrefix += SPECIAL_STATUSES[sKey]?.icon || '');
                        let displayIcon = `${iconPrefix}${cropInfo?.icon || '?'}`;

                        if (specialStatuses.length > 0) {
                            content.classList.add('status-icon-present');
                        } else {
                            content.classList.remove('status-icon-present');
                        }

                        switch (plotData.state) {
                            case 'empty':
                                content.innerHTML = '🟫';
                                plotEl.onclick = () => { if (selectedGearToPlace) { placeGearOnPlot(i); } else { plantCrop(i); } };
                                plotEl.oncontextmenu = (e) => { e.preventDefault(); plantAllSelectedSeed(); };
                                break;
                            case 'growing':
                                content.innerHTML = displayIcon;
                                const pBar = document.createElement('div'); pBar.className = 'progress-bar'; pBar.style.width = `${calculateGrowthProgress(plotData) * 100}%`; plotEl.appendChild(pBar);
                                plotEl.onclick = () => { if (selectedGearToPlace) { placeGearOnPlot(i); } else { addMessage(`${cropInfo?.name || 'Crop'} is growing...`); } };
                                plotEl.oncontextmenu = (e) => { e.preventDefault(); togglePlotLock(i); };
                                break;
                            case 'ready':
                                anyPlotsReady = true;
                                content.innerHTML = displayIcon;
                                plotEl.onclick = () => { if (selectedGearToPlace) { placeGearOnPlot(i); } else { harvestCrop(i); } };
                                plotEl.oncontextmenu = (e) => { e.preventDefault(); togglePlotLock(i); };
                                break;
                            case 'gear':
                                const gData = GEAR_DATA[plotData.gear?.gearKey];
                                content.innerHTML = gData?.icon || '⚙️';
                                plotEl.classList.add('plot-has-gear');
                                // Visual badge to show a gear is equipped on this plot
                                const gearBadge = document.createElement('span');
                                gearBadge.className = 'gear-overlay';
                                gearBadge.textContent = '⚙';
                                plotEl.appendChild(gearBadge);
                                plotEl.onclick = () => { if (selectedGearToPlace) { addMessage('Plot already occupied by a gear.', 'error'); } else { addMessage(`${gData?.name || 'Gear'} is improving your farm!`); } };
                                break;
                            default: content.innerHTML = '❓';
                        }
                    }
                } else { plotEl.classList.add('locked'); content.innerHTML = '🔒'; } plotEl.appendChild(content); farmGridEl.appendChild(plotEl);
            } harvestAllButtonEl.disabled = !anyPlotsReady;
            if (plantAllButtonEl) {
                const sel = gameState.selectedCropToPlant;
                plantAllButtonEl.disabled = !sel || !(gameState.inventory.seeds[sel] > 0) || !gameState.plots.some(p => p.state === 'empty') || !isCropUnlockedForRebirth(sel);
            }

            const plantableCropsOverall = getPlantableCropsSorted(false);
            // Planting options are now in the seed inventory, no need to render them separately

            buySeedsEl.innerHTML = plantableCropsOverall.map(k => {
                const c = CROP_DATA[k];
                if (!c || c.seedCost === null) return '';

                const co = c.seedCost;
                if (!isCropUnlockedForRebirth(k)) {
                    const needRb = getMinRebirthsToBuyCrop(k);
                    const costText = `${formatMoney(co)}💰`;
                    const titleText = `Rebirth ${needRb} required to buy ${c.name} seeds.`;
                    return `<li class="plant-button shop-seed-unavailable shop-seed-rebirth-locked" title="${titleText}"><span class="shop-tile-icon">${c.icon}</span><span class="shop-tile-name">🔒 ${c.name}</span><span class="shop-tile-stock">Rb${needRb}</span><span class="shop-tile-price">${costText}</span></li>`;
                }

                const inRotation = gameState.shopCurrentlyAvailableSeedKeys.includes(k);
                if (!gameState.shopSeedStock) gameState.shopSeedStock = {};
                const stockRemaining = Number.isFinite(gameState.shopSeedStock[k]) ? gameState.shopSeedStock[k] : (inRotation ? Infinity : 0);

                const totalCost = co * purchaseQtySeeds;
                const costText = co === 0 ? "Free" : `${formatMoney(totalCost)}💰`;
                const stockLabel = Number.isFinite(stockRemaining) ? `x${stockRemaining}` : '';

                const isInStock = inRotation && stockRemaining > 0;

                if (!isInStock) {
                    const timeToRefresh = Math.max(0, gameState.shopNextRefreshTimestamp - Date.now());
                    const titleText = `Sold out. (Refreshes in: ${formatTime(timeToRefresh)})`;
                    return `<li class="plant-button shop-seed-unavailable" title="${titleText}"><span class="shop-tile-icon">${c.icon}</span><span class="shop-tile-name">${c.name}</span><span class="shop-tile-price">${costText}</span></li>`;
                } else {
                    const titleText = co === 0
                        ? `Get for Free (Stock: ${stockRemaining})`
                        : `Buy ${purchaseQtySeeds} ${c.name} for ${totalCost.toLocaleString()}💰 (Stock: ${stockRemaining})`;
                    const isDisabledClass = (co > 0 && gameState.money < totalCost) ? 'disabled' : '';
                    return `<li class="plant-button ${isDisabledClass}" onclick="buySeeds('${k}',${purchaseQtySeeds})" title="${titleText}"><span class="shop-tile-icon">${c.icon}</span><span class="shop-tile-name">${c.name}</span>${stockLabel ? `<span class="shop-tile-stock">${stockLabel}</span>` : ''}<span class="shop-tile-price">${costText}</span></li>`;
                }
            }).join('');

            if (plantableCropsOverall.length === 0) {
                buySeedsEl.innerHTML = '<p style="font-size:.9em;color:var(--log-text-color)">(No seeds defined in game data)</p>';
            }

            sellAllProduceButtonEl.disabled = !Object.entries(gameState.inventory.produce).some(([k, v]) => v.count > 0 && !v.isFavorited && parseItemKey(k).baseKey && CROP_DATA[parseItemKey(k).baseKey]?.sellPrice !== null);

            farmUpgradesContainerEl.innerHTML = '<h4>Upgrades:</h4>'; const buyPlotBtn = document.createElement('button'), pCost = calculatePlotCost(); buyPlotBtn.onclick = buyPlot; buyPlotBtn.disabled = gameState.totalPlots >= MAX_PLOTS || gameState.money < pCost; if (gameState.totalPlots >= MAX_PLOTS) { buyPlotBtn.textContent = `Max Plots (${MAX_PLOTS})`; buyPlotBtn.title = "Max plots owned."; } else { buyPlotBtn.innerHTML = `Buy Plot (${gameState.totalPlots}/${MAX_PLOTS}) - ${formatMoney(pCost)}💰`; buyPlotBtn.title = `Buy plot ${gameState.totalPlots + 1} for ${pCost.toLocaleString()}💰`; } farmUpgradesContainerEl.appendChild(buyPlotBtn); const upGrowthBtn = document.createElement('button'), gCost = calculateGrowthUpgradeCost(), cLevel = gameState.growthSpeedLevel, mLevel = MAX_GROWTH_LEVELS; upGrowthBtn.onclick = buyGrowthUpgrade; if (cLevel >= mLevel) { upGrowthBtn.textContent = `Max Growth Speed (${cLevel}/${mLevel})`; upGrowthBtn.disabled = true; upGrowthBtn.title = "Growth speed maxed."; } else { upGrowthBtn.innerHTML = `Improve Growth (${cLevel}/${mLevel}) - ${formatMoney(gCost)}💰`; upGrowthBtn.disabled = gameState.money < gCost; upGrowthBtn.title = `Upgrade growth Lvl ${cLevel + 1} for ${gCost.toLocaleString()}💰`; } farmUpgradesContainerEl.appendChild(upGrowthBtn);

            // Render gear shop
            if (buyGearsEl) {
                const allGearsKeys = Object.keys(GEAR_DATA).sort((a, b) => (GEAR_DATA[a].cost || 0) - (GEAR_DATA[b].cost || 0));
                (gameState.shopCurrentlyAvailableGearKeys || []).forEach(k => ensureShopGearStockForKey(k));
                buyGearsEl.innerHTML = allGearsKeys.map(k => {
                    const g = GEAR_DATA[k];
                    if (!gameState.shopGearStock) gameState.shopGearStock = {};
                    const inRotation = gameState.shopCurrentlyAvailableGearKeys.includes(k);
                    const stockRemaining = Number.isFinite(gameState.shopGearStock[k]) ? gameState.shopGearStock[k] : 0;
                    const isInStock = inRotation && stockRemaining > 0;

                    if (!isInStock) {
                        const timeToRefresh = Math.max(0, gameState.shopNextRefreshTimestamp - Date.now());
                        const titleText = `Out of stock. (Refreshes in: ${formatTime(timeToRefresh)})`;
                        return `<li class="plant-button shop-seed-unavailable" title="${titleText}"><span class="shop-tile-icon">${g.icon}</span><span class="shop-tile-name">${g.name}</span><span class="shop-tile-price">${formatMoney(g.cost)}💰</span></li>`;
                    } else {
                        const stockLabel = `x${stockRemaining}`;
                        const totalCost = g.cost;
                        const isDisabledClass = gameState.money < totalCost ? 'disabled' : '';
                        const titleText = `Buy ${g.name} for ${formatMoney(totalCost)} 💰 - ${g.description} (Stock: ${stockRemaining})`;
                        return `<li class="plant-button ${isDisabledClass}" onclick="buyGear('${k}', 1)" title="${titleText}"><span class="shop-tile-icon">${g.icon}</span><span class="shop-tile-name">${g.name}</span><span class="shop-tile-stock">${stockLabel}</span><span class="shop-tile-price">${formatMoney(totalCost)}💰</span></li>`;
                    }
                }).join('');
            }
            achievementsListEl.innerHTML = ''; Object.keys(ACHIEVEMENT_DATA).sort((a, b) => a === 'complete_all' ? 1 : b === 'complete_all' ? -1 : ACHIEVEMENT_DATA[a].name.localeCompare(ACHIEVEMENT_DATA[b].name)).forEach(k => { const aD = ACHIEVEMENT_DATA[k], iC = gameState.achievements[k] === true, li = document.createElement('li'); li.className = iC ? 'completed' : 'incomplete'; li.title = iC ? 'Completed!' : 'Incomplete'; li.dataset.achKey = k; const icon = document.createElement('span'); icon.className = 'ach-icon'; icon.textContent = aD.icon; const details = document.createElement('div'); details.className = 'ach-details'; const name = document.createElement('span'); name.className = 'ach-name'; name.textContent = aD.name; const descRwd = document.createElement('span'); descRwd.className = 'ach-desc-reward'; const desc = document.createElement('span'); desc.className = 'ach-desc'; desc.textContent = aD.desc; descRwd.appendChild(desc); if (aD.rwd > 0 && !iC) { const rwd = document.createElement('span'); rwd.className = 'ach-reward'; rwd.textContent = `Reward: ${aD.rwd}💰`; descRwd.appendChild(rwd) } details.appendChild(name); details.appendChild(descRwd); li.appendChild(icon); li.appendChild(details); achievementsListEl.appendChild(li) }); copyCodeButtonEl.disabled = !saveCodeOutputEl.value || saveCodeOutputEl.value.startsWith('Err') || saveCodeOutputEl.value.startsWith('Load');

            if (isModActive) {
                dailyQuestsSectionEl.style.display = 'none';
            } else {
                dailyQuestsSectionEl.style.display = 'block';
                dailyQuestsListEl.innerHTML = gameState.activeDailyQuests.map((quest, index) => {
                    const questDef = QUEST_DEFINITIONS.find(qd => qd.id === quest.questId);
                    if (!questDef) return '<li>Error: Unknown Quest</li>';
                    const progressPercent = Math.min(100, (quest.progress / questDef.targetAmount) * 100);
                    let liClass = ""; if (quest.completed && !quest.claimed) liClass = "quest-completed"; if (quest.claimed) liClass = "quest-claimed";
                    let rewardStr = "Reward: "; if (questDef.rewards.money) rewardStr += `${questDef.rewards.money}💰 `; if (questDef.rewards.seeds) { rewardStr += Object.entries(questDef.rewards.seeds).map(([key, amt]) => `${amt} ${CROP_DATA[key]?.icon || key}`).join(', '); }
                    return `<li class="${liClass}"><span class="quest-title">${questDef.title}</span><span class="quest-desc">${questDef.description} (${quest.progress}/${questDef.targetAmount})</span><div class="quest-progress-bar-container"><div class="quest-progress-bar" style="width: ${progressPercent}%"></div></div><span class="quest-reward-text">${rewardStr}</span>${quest.completed && !quest.claimed ? `<button class="quest-claim-button" onclick="claimQuestReward(${index})">Claim</button>` : ''}${quest.claimed ? `<span>(Claimed)</span>` : ''}</li>`;
                }).join('') || '<li>No active quests. Check back later!</li>';
            }

            // Rebirth Section
            if (rebirthContentEl) {
                const rc = gameState.rebirthCount || 0;
                const rm = gameState.rebirthMultiplier || 1.0;
                const atMax = rc >= MAX_REBIRTHS;
                const cost = getRebirthCost(rc);
                const canRebirth = !atMax && gameState.money >= cost;
                const gatedList = getRebirthGatedCropKeysAscending();
                const fruitsUnlocked = gatedList.filter(k => isCropUnlockedForRebirth(k)).length;
                const nextLockedCrop = gatedList.find(k => !isCropUnlockedForRebirth(k));
                const nextFruitRb = nextLockedCrop != null ? getMinRebirthsToBuyCrop(nextLockedCrop) : null;
                let rebirthHTML = `<p class="rebirth-info">Rebirths: <strong>${rc}/${MAX_REBIRTHS}</strong> | Sell Multiplier: <strong>${rm.toFixed(2)}x</strong> | Starting Plots: <strong>${INITIAL_PLOTS + rc}</strong></p>`;
                rebirthHTML += `<p class="rebirth-info">Premium shop fruits: <strong>${fruitsUnlocked}/${REBIRTH_GATED_FRUIT_COUNT}</strong>${nextFruitRb !== null ? ` <span class="rebirth-next-fruit">(next at rebirth <strong>${nextFruitRb}</strong>)</span>` : ' <span class="rebirth-next-fruit">(all unlocked)</span>'}</p>`;
                if (atMax) {
                    rebirthHTML += `<button disabled>Max Rebirths Reached</button>`;
                } else {
                    const nextMulti = getRebirthMultiplier(rc + 1);
                    rebirthHTML += `<p class="rebirth-info">Cost: <strong>${formatMoney(cost)}💰</strong> (Current: ${formatMoney(gameState.money)}💰)</p>`;
                    rebirthHTML += `<button onclick="performRebirth()" ${canRebirth ? '' : 'disabled'} title="Spend ${cost.toLocaleString()}💰 to reset farm for ${nextMulti.toFixed(2)}x sell multiplier and +1 starting plot">\ud83d\udd04 Rebirth (Next: ${nextMulti.toFixed(2)}x)</button>`;
                }
                rebirthContentEl.innerHTML = rebirthHTML;
            }
        }

        const saveGame = (isAuto = false) => {
            if (!gameState) return;
            if (isAuto && isModActive) return;
            try {
                const achievementsToSave = {};
                Object.keys(ACHIEVEMENT_DATA).forEach(key => { achievementsToSave[key] = gameState.achievements[key] === true; });
                const plotsToSave = gameState.plots.map(p => ({
                    s: p.state, c: p.crop, pt: p.plantedTime, gd: p.growDuration, sss: p.specialStatuses, fw: p.finalWeightMultiplier, lk: p.isLocked || false, g: p.gear, ag: p.accruedGrowth || 0
                }));
                mergePromoCodesIntoGameState();
                const dataToSaveCommon = {
                    v: SAVE_CODE_VERSION, m: gameState.money, p: plotsToSave, inv: gameState.inventory, tp: gameState.totalPlots, gsl: gameState.growthSpeedLevel, ach: achievementsToSave, st: gameState.stats,
                    tips: gameState.shownTips || [], lu: Date.now(), sNRT: gameState.shopNextRefreshTimestamp, sCASK: gameState.shopCurrentlyAvailableSeedKeys, sCAGK: gameState.shopCurrentlyAvailableGearKeys,
                    sSS: gameState.shopSeedStock && typeof gameState.shopSeedStock === 'object' ? { ...gameState.shopSeedStock } : {},
                    sGS: gameState.shopGearStock && typeof gameState.shopGearStock === 'object' ? { ...gameState.shopGearStock } : {},
                    activeDailyQuests: gameState.activeDailyQuests, lastQuestResetTimestamp: gameState.lastQuestResetTimestamp, cw: gameState.currentWeather, wcts: gameState.weatherChangeTimestamp,
                    rbc: gameState.rebirthCount || 0, rbm: gameState.rebirthMultiplier || 1.0,
                    usedPromoCodes: Array.isArray(gameState.usedPromoCodes) ? gameState.usedPromoCodes : [],
                    farmName: gameState.farmName || 'Your Farm',
                    keybinds: gameState.keybinds || { plantAll: '1', harvestAll: '2', sellAll: '3' },
                };
                if (isModActive) {
                    if (!activeModChecksum) { if (!isAuto) { addMessage("Modded save error: No checksum. Re-apply mod.", 'error', true); saveCodeOutputEl.value = 'Mod Save Error'; copyCodeButtonEl.disabled = true; } return; }
                    const modSaveData = { v: SAVE_CODE_VERSION, modId: activeModChecksum, state: dataToSaveCommon };
                    const jsonString = JSON.stringify(modSaveData);
                    const base64Encoded = btoa(jsonString);
                    const finalSaveCode = "MOD|" + base64Encoded;
                    if (!isAuto) { saveCodeOutputEl.value = finalSaveCode; copyCodeButtonEl.disabled = false; addMessage("Generated MODDED save code.", 'success'); }
                } else {
                    const jsonString = JSON.stringify(dataToSaveCommon);
                    const checksum = calculateChecksum(jsonString);
                    const obfuscated = xorCipher(jsonString, XOR_SAVE_KEY);
                    const base64Encoded = btoa(obfuscated);
                    const finalSaveCode = base64Encoded + "." + checksum;
                    localStorage.setItem('webFarmSaveData', finalSaveCode);
                    if (!isAuto) { saveCodeOutputEl.value = finalSaveCode; copyCodeButtonEl.disabled = false; addMessage("Generated standard save code.", 'success'); }
                }
            } catch (error) {
                console.error("Save Error:", error);
                if (!isAuto) { addMessage(`Save failed. See console.`, 'error', true); saveCodeOutputEl.value = 'Save Error'; copyCodeButtonEl.disabled = true; }
            }
        }

        const copySaveCode = () => {
            const code = saveCodeOutputEl.value;
            if (!code || copyCodeButtonEl.disabled) return;

            const btnTxt = copyCodeButtonEl.textContent;
            copyCodeButtonEl.disabled = true;

            const resetBtn = () => {
                setTimeout(() => {
                    copyCodeButtonEl.textContent = btnTxt;
                    copyCodeButtonEl.disabled = !saveCodeOutputEl.value || saveCodeOutputEl.value.startsWith('Err');
                }, 2500);
            };

            const fallbackCopy = () => {
                saveCodeOutputEl.removeAttribute('readonly');
                saveCodeOutputEl.select();
                try {
                    document.execCommand('copy');
                    addMessage("Code copied to clipboard!", 'success', true);
                    copyCodeButtonEl.textContent = 'Copied!';
                } catch (err) {
                    console.error('Fallback copy failed:', err);
                    addMessage('Automatic copy failed. Please copy manually.', 'error', true);
                    copyCodeButtonEl.textContent = 'Select & Copy';
                } finally {
                    saveCodeOutputEl.setAttribute('readonly', true);
                    window.getSelection()?.removeAllRanges();
                    resetBtn();
                }
            };

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(code).then(() => {
                    addMessage("Code copied to clipboard!", 'success', true);
                    copyCodeButtonEl.textContent = 'Copied!';
                    resetBtn();
                }, () => {
                    fallbackCopy();
                });
            } else {
                fallbackCopy();
            }
        };


        const loadGame = (rawSaveData) => {
            if (!rawSaveData || typeof rawSaveData !== 'string' || !rawSaveData.trim()) { addMessage("Load Fail: No data.", 'error', true); return false; }
            try {
                let loadedVersion, dataToProcess;
                if (rawSaveData.startsWith("MOD|")) {
                    if (!isModActive) throw new Error("Modded save, no mod active. Apply mod first.");
                    if (!activeModChecksum) throw new Error("Cannot verify modded save: Active mod inconsistent. Re-apply mod.");
                    const encodedModData = rawSaveData.substring(4);
                    let jsonString;
                    try { jsonString = atob(encodedModData); } catch (e) { throw new Error("Modded save decode fail (Base64)."); }
                    const loadedModFullData = JSON.parse(jsonString);
                    if (typeof loadedModFullData !== 'object' || !loadedModFullData.modId || !loadedModFullData.state) throw new Error("Invalid modded save structure.");
                    if (loadedModFullData.modId !== activeModChecksum) throw new Error(`Incorrect mod. Save needs mod ID '${loadedModFullData.modId}', active is '${activeModChecksum}'.`);
                    loadedVersion = loadedModFullData.v || 0;
                    dataToProcess = loadedModFullData.state;
                } else {
                    if (!rawSaveData.includes('.') || rawSaveData.split('.').length !== 2) throw new Error("Invalid save format (checksum).");
                    const [encodedData, storedChecksum] = rawSaveData.split('.');
                    if (!encodedData || storedChecksum.length !== 4) throw new Error("Invalid save structure (data/checksum).");
                    let obfuscatedData;
                    try { obfuscatedData = atob(encodedData); } catch (e) { throw new Error("Decode fail (Base64)."); }
                    const jsonString = xorCipher(obfuscatedData, XOR_SAVE_KEY);
                    const calculatedChecksum = calculateChecksum(jsonString);
                    if (calculatedChecksum !== storedChecksum) throw new Error("Save data corrupted/tampered (Checksum mismatch).");
                    const parsedData = JSON.parse(jsonString);
                    if (isModActive) { CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); isModActive = false; activeModChecksum = null; addMessage("Standard save loaded. Mod deactivated.", 'info', true); checkAndResetDailyQuests(); }
                    loadedVersion = parsedData.v || 0;
                    dataToProcess = parsedData;
                }
                if (typeof dataToProcess !== 'object' || dataToProcess === null) throw new Error("Invalid save data state.");

                let newState = createInitialGameState(false);

                newState.money = (typeof dataToProcess.m === 'number' && dataToProcess.m >= 0) ? dataToProcess.m : newState.money;
                newState.totalPlots = (typeof dataToProcess.tp === 'number' && dataToProcess.tp >= INITIAL_PLOTS) ? dataToProcess.tp : newState.totalPlots;
                newState.growthSpeedLevel = (typeof dataToProcess.gsl === 'number' && dataToProcess.gsl >= 0) ? dataToProcess.gsl : newState.growthSpeedLevel;
                newState.lastUpdate = (typeof dataToProcess.lu === 'number') ? dataToProcess.lu : Date.now();
                newState.shownTips = Array.isArray(dataToProcess.tips) ? dataToProcess.tips : [];
                newState.totalPlots = Math.min(MAX_PLOTS, Math.max(INITIAL_PLOTS, newState.totalPlots));
                newState.growthSpeedLevel = Math.min(MAX_GROWTH_LEVELS, Math.max(0, newState.growthSpeedLevel));
                newState.shopNextRefreshTimestamp = typeof dataToProcess.sNRT === 'number' ? dataToProcess.sNRT : 0;
                newState.shopCurrentlyAvailableSeedKeys = Array.isArray(dataToProcess.sCASK) ? dataToProcess.sCASK.filter(key => CROP_DATA[key] && CROP_DATA[key].seedCost !== null) : [];
                newState.shopCurrentlyAvailableGearKeys = Array.isArray(dataToProcess.sCAGK) ? dataToProcess.sCAGK.filter(key => GEAR_DATA[key]) : [];
                newState.shopSeedStock = {};
                if (dataToProcess.sSS && typeof dataToProcess.sSS === 'object') {
                    Object.keys(dataToProcess.sSS).forEach(k => {
                        const v = dataToProcess.sSS[k];
                        if (CROP_DATA[k] && CROP_DATA[k].seedCost !== null && typeof v === 'number' && Number.isFinite(v) && v >= 0) {
                            newState.shopSeedStock[k] = v;
                        }
                    });
                }
                newState.shopGearStock = {};
                if (dataToProcess.sGS && typeof dataToProcess.sGS === 'object') {
                    Object.keys(dataToProcess.sGS).forEach(k => {
                        const v = dataToProcess.sGS[k];
                        if (GEAR_DATA[k] && typeof v === 'number' && Number.isFinite(v) && v >= 0) {
                            newState.shopGearStock[k] = v;
                        }
                    });
                }
                newState.activeDailyQuests = Array.isArray(dataToProcess.activeDailyQuests) ? dataToProcess.activeDailyQuests : [];
                newState.lastQuestResetTimestamp = typeof dataToProcess.lastQuestResetTimestamp === 'number' ? dataToProcess.lastQuestResetTimestamp : 0;
                newState.currentWeather = (typeof dataToProcess.cw === 'string' && WEATHER_CONFIG[dataToProcess.cw]) ? dataToProcess.cw : 'sunny';
                newState.weatherChangeTimestamp = typeof dataToProcess.wcts === 'number' ? dataToProcess.wcts : (Date.now() + getRandomDuration(WEATHER_CONFIG[newState.currentWeather].duration_ms));
                newState.rebirthCount = (typeof dataToProcess.rbc === 'number' && dataToProcess.rbc >= 0) ? Math.min(dataToProcess.rbc, MAX_REBIRTHS) : 0;
                newState.rebirthMultiplier = (typeof dataToProcess.rbm === 'number' && dataToProcess.rbm >= 1) ? dataToProcess.rbm : getRebirthMultiplier(newState.rebirthCount);
                newState.usedPromoCodes = Array.isArray(dataToProcess.usedPromoCodes) ? dataToProcess.usedPromoCodes.map(normalizePromoCode).filter(Boolean) : [];
                newState.farmName = typeof dataToProcess.farmName === 'string' && dataToProcess.farmName.trim().length > 0
                    ? dataToProcess.farmName.trim().slice(0, 32)
                    : 'Your Farm';
                newState.keybinds = dataToProcess.keybinds && typeof dataToProcess.keybinds === 'object'
                    ? {
                        plantAll: (dataToProcess.keybinds.plantAll || '1').toString().toLowerCase().slice(0, 1),
                        harvestAll: (dataToProcess.keybinds.harvestAll || '2').toString().toLowerCase().slice(0, 1),
                        sellAll: (dataToProcess.keybinds.sellAll || '3').toString().toLowerCase().slice(0, 1),
                    }
                    : { plantAll: '1', harvestAll: '2', sellAll: '3' };


                const loadedInv = dataToProcess.inv || {}; const loadedSeeds = loadedInv.seeds || {}; const loadedProduce = loadedInv.produce || {}; const loadedGears = loadedInv.gears || {};
                newState.inventory = { seeds: {}, produce: {}, gears: {} };
                Object.keys(CROP_DATA).filter(k => CROP_DATA[k].seedCost !== null).forEach(key => { newState.inventory.seeds[key] = (typeof loadedSeeds[key] === 'number' && loadedSeeds[key] >= 0) ? loadedSeeds[key] : 0; });
                Object.keys(loadedGears).forEach(gearKey => {
                    if (GEAR_DATA[gearKey] && typeof loadedGears[gearKey] === 'number' && loadedGears[gearKey] >= 0) {
                        newState.inventory.gears[gearKey] = loadedGears[gearKey];
                    }
                });
                Object.keys(loadedProduce).forEach(itemKey => {
                    const loadedValue = loadedProduce[itemKey];
                    let produceData = { count: 0, totalWeight: 0.0, isFavorited: false };
                    if (typeof loadedValue === 'number') { // Legacy save format (pre-favoriting)
                        produceData.count = loadedValue;
                        produceData.totalWeight = loadedValue * 1.0;
                    } else if (typeof loadedValue === 'object' && loadedValue !== null) {
                        produceData.count = Math.max(0, loadedValue.count || 0);
                        produceData.totalWeight = Math.max(0, loadedValue.totalWeight || 0);
                        produceData.isFavorited = loadedValue.isFavorited === true;
                        if (produceData.count === 0) produceData.totalWeight = 0.0;
                    }
                    // Only keep non-zero or favorited items to prevent massive state bloat
                    if (produceData.count > 0 || produceData.isFavorited) {
                        newState.inventory.produce[itemKey] = produceData;
                    }
                });

                const loadedStats = dataToProcess.st || {}; const loadedHarvested = loadedStats.harvested || {}; const loadedPlanted = loadedStats.planted || {};
                newState.stats.totalMoneyEarned = (typeof loadedStats.totalMoneyEarned === 'number' && loadedStats.totalMoneyEarned >= 0) ? loadedStats.totalMoneyEarned : 0;
                newState.stats.hasSoldProduce = loadedStats.hasSoldProduce === true;
                newState.stats.harvested = {}; newState.stats.planted = {}; newState.stats.mutationsHarvested = {};
                Object.keys(CROP_DATA).forEach(key => {
                    newState.stats.harvested[key] = (typeof loadedHarvested[key] === 'number' && loadedHarvested[key] >= 0) ? loadedHarvested[key] : 0;
                    if (CROP_DATA[key].yields) { CROP_DATA[key].yields.forEach(yieldKey => { if (CROP_DATA[yieldKey]) { newState.stats.harvested[yieldKey] = (typeof loadedHarvested[yieldKey] === 'number' && loadedHarvested[yieldKey] >= 0) ? loadedHarvested[yieldKey] : 0; newState.stats.planted[yieldKey] = 0; } }); }
                    newState.stats.planted[key] = (typeof loadedPlanted[key] === 'number' && loadedPlanted[key] >= 0) ? loadedPlanted[key] : 0;
                });
                newState.stats.mutationsHarvested = loadedStats.mutationsHarvested || {};


                const loadedAchievements = dataToProcess.ach || {};
                Object.keys(ACHIEVEMENT_DATA).forEach(key => { newState.achievements[key] = loadedAchievements[key] === true; });

                newState.plots = [];
                const loadedPlots = (Array.isArray(dataToProcess.p)) ? dataToProcess.p : [];
                const now = Date.now();
                for (let i = 0; i < newState.totalPlots; i++) {
                    const loadedP = loadedPlots[i];
                    const plot = { id: i, state: 'empty', crop: null, plantedTime: null, growDuration: null, specialStatuses: [], finalWeightMultiplier: null, isLocked: false, gear: null, accruedGrowth: undefined };
                    if (loadedP && typeof loadedP === 'object') {
                        const validStates = ['empty', 'growing', 'ready', 'gear'];
                        const cropKey = loadedP.c; const state = loadedP.s;
                        if (validStates.includes(state) && (cropKey === null || CROP_DATA[cropKey] || state === 'gear')) {
                            plot.state = state; plot.crop = cropKey; plot.finalWeightMultiplier = (typeof loadedP.fw === 'number') ? loadedP.fw : null;
                            plot.isLocked = loadedP.lk === true;
                            plot.gear = loadedP.g || null;
                            plot.accruedGrowth = loadedP.ag;
                            plot.specialStatuses = [];
                            if (Array.isArray(loadedP.sss)) { plot.specialStatuses = loadedP.sss.filter(s => SPECIAL_STATUSES[s]); }
                            else if (typeof loadedP.ss === 'string' && SPECIAL_STATUSES[loadedP.ss]) { plot.specialStatuses = [loadedP.ss]; }

                            if (plot.state === 'growing' && plot.crop) {
                                if (typeof loadedP.pt === 'number' && typeof loadedP.gd === 'number' && loadedP.gd > 0) {
                                    plot.plantedTime = loadedP.pt; plot.growDuration = loadedP.gd;
                                    let environmentalSpeedBoost = 1.0; if (newState.currentWeather === 'gentle_rain' && WEATHER_CONFIG.gentle_rain.growthModifier) { environmentalSpeedBoost = WEATHER_CONFIG.gentle_rain.growthModifier; }
                                    const effectiveGrowDuration = plot.growDuration / environmentalSpeedBoost; const timeElapsed = now - plot.plantedTime;
                                    if (timeElapsed >= effectiveGrowDuration) { plot.state = 'ready'; plot.plantedTime = null; }
                                    if (plot.finalWeightMultiplier === null && CROP_DATA[plot.crop]?.weightRange) { plot.finalWeightMultiplier = getRandomWeight(CROP_DATA[plot.crop].weightRange); } else if (plot.finalWeightMultiplier === null) { plot.finalWeightMultiplier = 1.0; }
                                } else { plot.state = 'empty'; plot.crop = null; plot.specialStatuses = []; plot.finalWeightMultiplier = null; }
                            } else if (plot.state !== 'empty') {
                                if (!plot.crop) { plot.state = 'empty'; plot.specialStatuses = []; plot.finalWeightMultiplier = null; }
                                else { plot.plantedTime = null; plot.growDuration = null; }
                            }
                        } else { plot.state = 'empty'; plot.crop = null; plot.specialStatuses = []; plot.finalWeightMultiplier = null; }
                    }
                    newState.plots.push(plot);
                }
                if (newState.plots.length !== newState.totalPlots) newState.totalPlots = newState.plots.length;

                if (loadedVersion > SAVE_CODE_VERSION) addMessage(`Warning: Loaded save v${loadedVersion}. Current v${SAVE_CODE_VERSION}.`, 'error', true);
                else if (loadedVersion < SAVE_CODE_VERSION && loadedVersion !== 0) addMessage(`Loaded save v${loadedVersion}. Updated to v${SAVE_CODE_VERSION}.`, 'info', true);

                gameState = newState;
                mergePromoCodesIntoGameState();
                (gameState.shopCurrentlyAvailableSeedKeys || []).forEach(key => ensureShopSeedStockForKey(key));
                (gameState.shopCurrentlyAvailableGearKeys || []).forEach(key => ensureShopGearStockForKey(key));
                // #region agent log
                fetch('http://127.0.0.1:7711/ingest/f0a6c53b-7ebe-41d3-94f8-ef8a60c84063',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'ef421f'},body:JSON.stringify({sessionId:'ef421f',location:'script.js:loadGame:after',message:'loaded state',data:{usedPromo:Array.isArray(gameState.usedPromoCodes)?gameState.usedPromoCodes.slice():[],seedStockKeys:Object.keys(gameState.shopSeedStock||{}).length,sCASK:gameState.shopCurrentlyAvailableSeedKeys?.length},timestamp:Date.now(),hypothesisId:'H4',runId:'post-fix'})}).catch(()=>{});
                // #endregion
                addMessage(`Game loaded ${rawSaveData.startsWith("MOD|") ? "(Modded)" : ""}!`, 'success', true);
                saveCodeInputEl.value = ''; saveCodeOutputEl.value = ''; copyCodeButtonEl.disabled = true;
                validateAndRefreshShopStock();
                checkAndResetDailyQuests();
                checkAllAchievements();
                updateUI();
                return true;
            } catch (error) {
                console.error("Load FAILED:", error);
                addMessage(`Load Failed: ${error.message}`, 'error', true);
                if (!rawSaveData.startsWith("MOD|") && isModActive) { CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); isModActive = false; activeModChecksum = null; }
                return false;
            }
        }

        const loadGamePrompt = () => { const code = saveCodeInputEl.value; if (!code?.trim()) { addMessage("Paste save code first.", 'error', true); return; } addMessage("Attempting load from code...", "info", true); if (loadGame(code)) saveGame(true); }
        const WELCOME_BONUS_KEY = 'webFarmWelcomeBonusGiven';
        const loadFromLocalStorage = () => { addMessage("Checking browser storage...", "info", true); const savedData = localStorage.getItem('webFarmSaveData'); if (savedData) { addMessage("Save data found. Loading...", "info", true); saveCodeOutputEl.value = 'Loading from storage...'; if (!loadGame(savedData)) { addMessage("Failed to load. Starting new game.", "error", true); localStorage.removeItem('webFarmSaveData'); initializeNewGame(); } saveCodeOutputEl.value = ''; } else { addMessage("No saved game. Starting new game.", "info", true); initializeNewGame(); } if (gameState && !localStorage.getItem(WELCOME_BONUS_KEY)) { gameState.money += 100; localStorage.setItem(WELCOME_BONUS_KEY, '1'); addMessage("Welcome bonus: +100💰 (one-time)", 'success', true); updateUI(); } }
        const loadModFile = () => { if (!modFileInputEl || !modFileInputEl.files || modFileInputEl.files.length === 0) { addMessage("Select mod (.json) first.", "error", true); return; } const file = modFileInputEl.files[0]; if (file.type !== "application/json") { addMessage(`Invalid type: ${file.type}. Need .json.`, "error", true); modFileInputEl.value = ''; return; } const reader = new FileReader(); reader.onload = (event) => { try { const modData = JSON.parse(event.target.result); applyModData(modData); } catch (error) { console.error("Mod Load Error (JSON):", error); addMessage(`Mod load fail: Invalid JSON. ${error.message}`, "error", true); isModActive = false; activeModChecksum = null; CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); if (gameState) validateAndRefreshShopStock(); updateUI(); } finally { modFileInputEl.value = ''; } }; reader.onerror = (event) => { console.error("Mod Load Error (File):", event.target.error); addMessage("Mod load fail: Could not read file.", "error", true); isModActive = false; activeModChecksum = null; CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); if (gameState) validateAndRefreshShopStock(); updateUI(); modFileInputEl.value = ''; }; reader.readAsText(file); };
        const applyModData = (modData) => {
            if (!modData || typeof modData !== 'object') { addMessage("Mod Error: Invalid data.", "error", true); isModActive = false; activeModChecksum = null; CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); if (gameState) validateAndRefreshShopStock(); updateUI(); return; } CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); let cropsAdded = 0, cropsUpdated = 0, modAppliedSuccessfully = false; if (modData.crops && typeof modData.crops === 'object') { for (const cropKey in modData.crops) { if (!modData.crops.hasOwnProperty(cropKey)) continue; const modCrop = modData.crops[cropKey]; if (typeof modCrop !== 'object' || !modCrop.name || !modCrop.icon || (modCrop.seedCost !== null && typeof modCrop.seedCost !== 'number') || (modCrop.sellPrice !== null && typeof modCrop.sellPrice !== 'number') || (modCrop.growTime !== null && typeof modCrop.growTime !== 'number')) { addMessage(`Mod Warn: Skip invalid crop '${cropKey}'.`, 'error', true); continue; } if (modCrop.seedCost !== null && modCrop.seedCost < 0) modCrop.seedCost = 0; if (modCrop.sellPrice !== null && modCrop.sellPrice < 0) modCrop.sellPrice = 0; if (modCrop.growTime !== null && modCrop.growTime < 0) modCrop.growTime = 10000; if (DEFAULT_CROP_DATA[cropKey]) cropsUpdated++; else cropsAdded++; CROP_DATA[cropKey] = { name: modCrop.name, icon: modCrop.icon, seedCost: modCrop.seedCost, sellPrice: modCrop.sellPrice, growTime: modCrop.growTime, yields: Array.isArray(modCrop.yields) ? modCrop.yields.slice() : undefined, weightRange: Array.isArray(modCrop.weightRange) && modCrop.weightRange.length === 2 && typeof modCrop.weightRange[0] === 'number' && typeof modCrop.weightRange[1] === 'number' && modCrop.weightRange[0] <= modCrop.weightRange[1] ? modCrop.weightRange : DEFAULT_CROP_DATA[cropKey]?.weightRange || [1.0, 1.0], rarity: modCrop.rarity, stockChance: modCrop.stockChance }; modAppliedSuccessfully = true; } for (const cropKey in CROP_DATA) { if (CROP_DATA[cropKey].yields) { const originalYields = CROP_DATA[cropKey].yields.length; CROP_DATA[cropKey].yields = CROP_DATA[cropKey].yields.filter(yieldKey => { const exists = CROP_DATA[yieldKey]; if (!exists) addMessage(`Mod Warn: Yield '${yieldKey}' for '${cropKey}' not found. Removing.`, 'error', true); return exists; }); if (CROP_DATA[cropKey].yields.length === 0) { delete CROP_DATA[cropKey].yields; if (originalYields > 0) addMessage(`Mod Info: All yields for '${cropKey}' invalid. Removed.`, 'info'); } } } for (const defaultKey in DEFAULT_CROP_DATA) { if (!modData.crops || !modData.crops.hasOwnProperty(defaultKey)) { CROP_DATA[defaultKey] = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA[defaultKey])); } } } else { addMessage("Mod Info: No 'crops' in mod. Defaults used.", 'info'); CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); isModActive = false; activeModChecksum = null; if (gameState) validateAndRefreshShopStock(); updateUI(); return; } if (gameState) {
                Object.keys(CROP_DATA).forEach(key => {
                    if (CROP_DATA[key].seedCost !== null && gameState.inventory.seeds[key] === undefined) gameState.inventory.seeds[key] = 0;
                    const processProduceInvForKey = (itemKey) => { if (gameState.inventory.produce[itemKey] === undefined) { gameState.inventory.produce[itemKey] = { count: 0, totalWeight: 0.0, isFavorited: false }; } };
                    const addAllStatusCombinations = (baseKey) => { const statuses = Object.keys(SPECIAL_STATUSES); for (let i = 0; i < (1 << statuses.length); i++) { let combination = []; for (let j = 0; j < statuses.length; j++) { if ((i >> j) & 1) combination.push(statuses[j]); } const fullKey = combination.length > 0 ? combination.sort().join('_') + '_' + baseKey : baseKey; processProduceInvForKey(fullKey); } };
                    if (CROP_DATA[key].sellPrice !== null) addAllStatusCombinations(key); if (CROP_DATA[key].yields) { CROP_DATA[key].yields.forEach(yK => { if (CROP_DATA[yK] && CROP_DATA[yK].sellPrice !== null) addAllStatusCombinations(yK); }); }
                    if (gameState.stats.harvested[key] === undefined) gameState.stats.harvested[key] = 0; if (gameState.stats.planted[key] === undefined) gameState.stats.planted[key] = 0;
                });
                ['seeds', 'produce'].forEach(invType => { Object.keys(gameState.inventory[invType]).forEach(itemKey => { const { baseKey } = parseItemKey(itemKey); const itemExistsInCropData = CROP_DATA[baseKey]; let shouldDelete = !itemExistsInCropData; if (itemExistsInCropData) { if (invType === 'seeds' && itemExistsInCropData.seedCost === null) shouldDelete = true; } if (shouldDelete) delete gameState.inventory[invType][itemKey]; }); });
                ['harvested', 'planted'].forEach(statType => { Object.keys(gameState.stats[statType]).forEach(itemKey => { if (!CROP_DATA[itemKey]) delete gameState.stats[statType][itemKey]; }); });
            }

            if (modAppliedSuccessfully) { isModActive = true; const modCropString = JSON.stringify(modData.crops); activeModChecksum = calculateChecksum(modCropString); addMessage(`Mod applied (ID: ${activeModChecksum}): ${cropsAdded} new, ${cropsUpdated} updated. Saving generates MODDED code.`, 'success', true); } else { isModActive = false; activeModChecksum = null; addMessage("Mod applied, no valid crops. Defaults used.", 'info'); }
            if (gameState) { refreshShopStock(); } else if (typeof updateUI === "function") { updateUI(); }
        }
        const createInitialGameState = (resetCrops = true) => {
            if (resetCrops) { CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); isModActive = false; activeModChecksum = null; }
            const initialWeather = 'sunny';
                const state = {
                v: SAVE_CODE_VERSION, money: 100, plots: [], inventory: { seeds: {}, produce: {}, gears: {} }, achievements: {},
                stats: { harvested: {}, planted: {}, totalMoneyEarned: 0, hasSoldProduce: false, mutationsHarvested: {} }, selectedCropToPlant: null,
                totalPlots: INITIAL_PLOTS, growthSpeedLevel: 0, shownTips: [], lastUpdate: Date.now(), shopNextRefreshTimestamp: 0,
                shopCurrentlyAvailableSeedKeys: [], shopCurrentlyAvailableGearKeys: [], activeDailyQuests: [], lastQuestResetTimestamp: 0,
                currentWeather: initialWeather, weatherChangeTimestamp: Date.now() + getRandomDuration(WEATHER_CONFIG[initialWeather].duration_ms),
                rebirthCount: 0, rebirthMultiplier: 1.0,
                shopSeedStock: {},
                shopGearStock: {},
                usedPromoCodes: [],
                farmName: 'Your Farm',
                keybinds: {
                    plantAll: '1',
                    harvestAll: '2',
                    sellAll: '3',
                },
            };
            for (let i = 0; i < state.totalPlots; i++) state.plots.push({ id: i, state: 'empty', crop: null, plantedTime: null, growDuration: null, specialStatuses: [], finalWeightMultiplier: null, isLocked: false, gear: null });
            Object.keys(GEAR_DATA).forEach(k => state.inventory.gears[k] = 0);

            Object.keys(CROP_DATA).forEach(k => {
                if (CROP_DATA[k].seedCost !== null) state.inventory.seeds[k] = 0;
                const initProduceInv = (itemKey) => { if (state.inventory.produce[itemKey] === undefined) state.inventory.produce[itemKey] = { count: 0, totalWeight: 0.0, isFavorited: false }; };

                if (CROP_DATA[k].sellPrice !== null) initProduceInv(k); // Only init base keys
                state.stats.harvested[k] = 0; state.stats.planted[k] = 0;

                if (CROP_DATA[k].yields) {
                    CROP_DATA[k].yields.forEach(yK => {
                        if (CROP_DATA[yK]) {
                            if (CROP_DATA[yK].sellPrice !== null) initProduceInv(yK);
                            if (state.stats.harvested[yK] === undefined) state.stats.harvested[yK] = 0;
                            if (state.stats.planted[yK] === undefined) state.stats.planted[yK] = 0;
                        }
                    });
                }
            });
            Object.keys(ACHIEVEMENT_DATA).forEach(k => state.achievements[k] = false);
            return state;
        }

        let produceActionMode = 'sell';
        const setProduceActionMode = (mode) => {
            produceActionMode = mode;
            const sellBtn = document.getElementById('action-toggle-sell');
            const lockBtn = document.getElementById('action-toggle-lock');
            if (sellBtn && lockBtn) {
                if (mode === 'sell') {
                    sellBtn.classList.add('active');
                    lockBtn.classList.remove('active');
                } else {
                    lockBtn.classList.add('active');
                    sellBtn.classList.remove('active');
                }
            }
        };

        let currentShopTab = 'fruits';
        const setShopTab = (tab) => {
            currentShopTab = tab;
            const fruitsBtn = document.getElementById('shop-tab-fruits');
            const gearsBtn = document.getElementById('shop-tab-gears');
            const fruitsSection = document.getElementById('shop-fruits-section');
            const gearsSection = document.getElementById('shop-gears-section');
            const shopSharedHeader = document.getElementById('shop-shared-header');

            if (tab === 'fruits') {
                if (fruitsBtn) fruitsBtn.classList.add('active');
                if (gearsBtn) gearsBtn.classList.remove('active');
                if (fruitsSection) fruitsSection.style.display = 'block';
                if (gearsSection) gearsSection.style.display = 'none';
                if (shopSharedHeader) shopSharedHeader.classList.remove('shop-gears-active');
            } else if (tab === 'gears') {
                if (gearsBtn) gearsBtn.classList.add('active');
                if (fruitsBtn) fruitsBtn.classList.remove('active');
                if (gearsSection) gearsSection.style.display = 'block';
                if (fruitsSection) fruitsSection.style.display = 'none';
                if (shopSharedHeader) shopSharedHeader.classList.add('shop-gears-active');
            }
        };
        const initializeNewGame = () => {
            isModActive = false; activeModChecksum = null;
            CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA));
            gameState = createInitialGameState(false);

            // On the very first game start on this device, grant 3 Wheat seeds.
            try {
                const FIRST_START_KEY = 'webFarmFirstStartGivenSeeds';
                if (!localStorage.getItem(FIRST_START_KEY)) {
                    if (gameState.inventory && gameState.inventory.seeds) {
                        gameState.inventory.seeds['wheat'] = (gameState.inventory.seeds['wheat'] || 0) + 3;
                    }
                    localStorage.setItem(FIRST_START_KEY, '1');
                    addMessage("Starter pack: +3 Wheat seeds to get you going!", 'success', true);
                }
            } catch (e) {
                console.warn("Unable to access localStorage for first-start seeds bonus.", e);
            }

            const logHeader = messagesEl.querySelector('h2'); messagesEl.innerHTML = ''; if (logHeader) messagesEl.appendChild(logHeader);
            addMessage("Welcome to Web Farm! Plant 🌾 or visit Shop 🛒.", "success", true);
            saveCodeOutputEl.value = ''; saveCodeInputEl.value = ''; copyCodeButtonEl.disabled = true;
            mergePromoCodesIntoGameState();
            refreshShopStock();
            generateNewDailyQuests();
            checkAllAchievements();
            updateUI();
            setTimeout(() => showTip('welcome', 'Hi Farmer! Select seed, then click empty 🟫 plot to plant.'), 1500);
        }
        const processDevCommand = () => { if (!isDevModeEnabled || !gameState || !devCommandInputEl) return; const txt = devCommandInputEl.value.trim(); if (!txt.startsWith('/')) return; const args = txt.substring(1).split(' '), cmd = args[0].toLowerCase(), params = args.slice(1); let needsUI = false; try { switch (cmd) { case 'money': { const amt = parseInt(params[0], 10); if (!isNaN(amt) && amt >= 0) { gameState.money = amt; needsUI = true; addMessage(`Dev:Money=${amt}💰.`, 'dev'); } else addMessage("Usage: /money [amount]", 'error'); } break; case 'give': { if (params.length >= 2) { let itemKey = params[params.length - 2].toLowerCase(), giveAmount = parseInt(params[params.length - 1], 10); let specialGiveStatuses = params.slice(0, -2).map(s => s.toLowerCase()); let invalidStatuses = specialGiveStatuses.filter(s => !SPECIAL_STATUSES[s]); if (invalidStatuses.length > 0) { addMessage(`Invalid status(es): ${invalidStatuses.join(', ')}.`, 'error'); break; } const baseInfo = CROP_DATA[itemKey]; if (!baseInfo) addMessage(`Invalid item '${itemKey}'.`, 'error'); else if (isNaN(giveAmount) || giveAmount <= 0) addMessage("Invalid amount.", 'error'); else { let givenType = null; specialGiveStatuses.sort(); const targetInvKey = specialGiveStatuses.length > 0 ? specialGiveStatuses.join('_') + '_' + itemKey : itemKey; const prefix = specialGiveStatuses.map(s => SPECIAL_STATUSES[s].icon).join(''); if (baseInfo.seedCost !== null && specialGiveStatuses.length === 0) { gameState.inventory.seeds[targetInvKey] = (gameState.inventory.seeds[targetInvKey] || 0) + giveAmount; givenType = 'seeds'; } else if (baseInfo.sellPrice !== null) { if (!gameState.inventory.produce[targetInvKey]) gameState.inventory.produce[targetInvKey] = { count: 0, totalWeight: 0.0, isFavorited: false }; gameState.inventory.produce[targetInvKey].count += giveAmount; const itemWeightRange = baseInfo.weightRange || [1.0, 1.0]; const avgItemWeight = (itemWeightRange[0] + itemWeightRange[1]) / 2; gameState.inventory.produce[targetInvKey].totalWeight += giveAmount * avgItemWeight; givenType = 'produce'; } else if (baseInfo.yields && specialGiveStatuses.length === 0) { addMessage(`Info: '${itemKey}' yields items. Give seeds or specific [status...] [item] [amount].`, 'info'); } if (givenType) { addMessage(`Dev: Gave ${giveAmount} ${baseInfo.name} (${givenType}).`, 'dev'); needsUI = true; } else addMessage(`Cannot give '${itemKey}' with statuses. Check type.`, 'error'); } } else addMessage("Usage: /give [status1] [status2]... [item_key] [amount]", 'error'); } break; case 'grow': { const itemKey = params[0]?.toLowerCase(); if (!itemKey) { addMessage("Usage: /grow [crop_key]", 'error'); break; } let grown = false; gameState.plots.forEach(p => { if (p.state === 'growing' && p.crop === itemKey) { p.state = 'ready'; p.plantedTime = null; p.growDuration = null; grown = true; } }); addMessage(grown ? `Dev: Grew ${itemKey}.` : `No growing ${itemKey}.`, grown ? 'dev' : 'error'); needsUI = grown; } break; case 'growall': { let count = 0; gameState.plots.forEach(p => { if (p.state === 'growing') { p.state = 'ready'; p.plantedTime = null; p.growDuration = null; count++; } }); addMessage(count > 0 ? `Dev: Grew all ${count} plots.` : `No plots growing.`, count > 0 ? 'dev' : 'info'); needsUI = count > 0; } break; case 'achieve': case 'achievement': { const key = params[0]?.toLowerCase(); if (key === 'all' || key === '*') { let uC = 0; Object.keys(ACHIEVEMENT_DATA).forEach(k => { if (!gameState.achievements[k]) { gameState.achievements[k] = true; uC++; } }); addMessage(`Dev: Unlocked ${uC} achievements.`, 'dev'); needsUI = true; } else if (ACHIEVEMENT_DATA[key]) { if (!gameState.achievements[key]) { gameState.achievements[key] = true; addMessage(`Dev: Unlocked '${key}'.`, 'dev'); needsUI = true; } else addMessage(`Ach '${key}' already done.`, 'info'); } else addMessage(`Unknown ach key '${key}'. /achieve [key|all]`, 'error'); } break; case 'reset': { if (confirm("DEV: Reset ALL achievement progress?")) { Object.keys(gameState.achievements).forEach(k => gameState.achievements[k] = false); addMessage("Dev: All achievements reset.", 'dev'); needsUI = true; checkAllAchievements(); } } break; case 'reset_tips': { if (gameState) { gameState.shownTips = []; addMessage('Dev: Shown tips reset.', 'dev'); } break; } case 'reset_mod': { isModActive = false; activeModChecksum = null; CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); addMessage('Dev: Mod state reset. Defaults used.', 'dev'); needsUI = true; if (gameState) refreshShopStock(); break; } case 'refreshshop': { if (gameState) { gameState.shopNextRefreshTimestamp = Date.now() + 1000; addMessage('Dev: Shop refresh timer set to 1 second.', 'dev'); needsUI = true; } break; } case 'resetquests': { if (gameState) { generateNewDailyQuests(); addMessage('Dev: Daily quests reset.', 'dev'); needsUI = true; } break; } case 'completequests': { if (gameState && gameState.activeDailyQuests) { gameState.activeDailyQuests.forEach(q => { const qDef = QUEST_DEFINITIONS.find(d => d.id === q.questId); if (qDef) q.progress = qDef.targetAmount; q.completed = true; }); addMessage('Dev: All active quests marked complete.', 'dev'); needsUI = true; } break; } case 'weather': { if (params.length > 0 && WEATHER_CONFIG[params[0].toLowerCase()]) { gameState.currentWeather = params[0].toLowerCase(); gameState.weatherChangeTimestamp = Date.now() + getRandomDuration(WEATHER_CONFIG[gameState.currentWeather].duration_ms); addMessage(`Dev: Weather set to ${WEATHER_CONFIG[gameState.currentWeather].name}.`, 'dev'); needsUI = true; } else { addMessage(`Usage: /weather [${Object.keys(WEATHER_CONFIG).join('|')}]`, 'error'); } break; } case 'help': { addMessage(["--- Dev Commands ---", "/money [amt]", "/give [status...] [item] [amt]", "/grow [crop]", "/growall", "/achieve [key|all]", "/reset (ach)", "/reset_tips", "/reset_mod", "/refreshshop", "/resetquests", "/completequests", `/weather [${Object.keys(WEATHER_CONFIG).join('|')}]`, "/help"].join('\n'), 'dev', true); break; } default: addMessage(`Unknown cmd: /${cmd}. /help for options.`, 'error'); break; } } catch (e) { console.error("Dev Command Error:", txt, e); addMessage(`Dev Error /${cmd}. Check console.`, 'error'); } devCommandInputEl.value = ''; if (needsUI) { updateUI(); checkAllAchievements(); } }
        const setupEventListeners = () => {
            if (saveCodeInputEl && devConsoleEl && devCommandInputEl) {
                saveCodeInputEl.addEventListener('input', () => {
                    if (saveCodeInputEl.value === DEV_ACTIVATION_CODE) {
                        isDevModeEnabled = !isDevModeEnabled;
                        devConsoleEl.style.display = isDevModeEnabled ? 'block' : 'none';
                        messagesEl.style.display = isDevModeEnabled ? 'block' : 'none';
                        saveCodeInputEl.value = '';
                        if (isDevModeEnabled) setTimeout(() => devCommandInputEl.focus(), 50);
                    }
                });
                devCommandInputEl.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        processDevCommand();
                    }
                });
            } else console.error("Cannot setup dev listeners");

            farmGridEl.addEventListener('mouseover', (event) => {
                const tP = event.target.closest('.plot');
                if (tP && !tP.classList.contains('locked')) {
                    const pId = parseInt(tP.dataset.plotId, 10);
                    if (!isNaN(pId)) showPlotTooltip(pId, event);
                } else hidePlotTooltip();
            });
            farmGridEl.addEventListener('mouseout', (event) => {
                if (!farmGridEl.contains(event.relatedTarget)) hidePlotTooltip();
                else {
                    const fP = event.target.closest('.plot');
                    const tE = event.relatedTarget;
                    if (fP && (!tE || !fP.contains(tE))) {
                        const tP = tE?.closest('.plot');
                        if (!tP || tP.classList.contains('locked')) hidePlotTooltip();
                    }
                }
            });
            farmGridEl.addEventListener('mousemove', movePlotTooltip);

            if (inventoryEl) {
                inventoryEl.addEventListener('contextmenu', (e) => {
                    const li = e.target.closest('li[data-item-key]');
                    if (li && produceInventoryEl.contains(li)) {
                        e.preventDefault();
                    }
                });
                inventoryEl.addEventListener('click', (e) => {
                    const li = e.target.closest('li[data-item-key], li.gear-inv-item');
                    if (li) {
                        const itemKey = li.dataset.itemKey;
                        const gearKey = li.dataset.gearKey;
                        if (gearKey) {
                            selectGearToPlace(gearKey);
                            return;
                        }
                        if (!itemKey) return;
                        if (seedInventoryEl.contains(li)) {
                            selectCropToPlant(itemKey);
                        } else if (produceInventoryEl.contains(li)) {
                            if (produceActionMode === 'sell') {
                                sellProduce(itemKey, 1);
                            } else if (produceActionMode === 'lock') {
                                toggleLockProduce(itemKey);
                            }
                        }
                    }
                });
            }

            const invContainers = [seedInventoryEl, produceInventoryEl];
            invContainers.forEach(container => {
                if (!container) return;
                container.addEventListener('mouseover', (e) => {
                    const li = e.target.closest('li[data-item-key], li.gear-inv-item');
                    if (li) showInventoryTooltip(li, e);
                });
                container.addEventListener('mouseout', (e) => {
                    const li = e.target.closest('li[data-item-key], li.gear-inv-item');
                    if (li && (!e.relatedTarget || !li.contains(e.relatedTarget))) hideInventoryTooltip();
                });
                container.addEventListener('mousemove', moveInventoryTooltip);
            });
            /* Additional mouseleave on each container to ensure tooltip hides */
            invContainers.forEach(container => {
                if (!container) return;
                container.addEventListener('mouseleave', () => {
                    hideInventoryTooltip();
                });
            });

            if (inventorySearchInputEl) {
                inventorySearchInputEl.addEventListener('input', () => {
                    const q = inventorySearchInputEl.value.trim().toLowerCase();
                    const allItems = document.querySelectorAll('#seed-inventory li, #produce-inventory li');
                    allItems.forEach(li => {
                        const name = (li.querySelector('.inv-tile-name')?.textContent || '').toLowerCase();
                        const matches = !q || name.includes(q);
                        li.style.display = matches ? '' : 'none';
                    });
                });
            }

            // Keyboard shortcuts (configurable in settings)
            document.addEventListener('keydown', (e) => {
                const tag = e.target.tagName;
                if (tag === 'INPUT' || tag === 'TEXTAREA') return;
                if (!gameState || !gameState.keybinds) return;
                const pressed = (e.key || '').toLowerCase();
                if (!pressed) return;

                if (pressed === (gameState.keybinds.harvestAll || 'r')) {
                    e.preventDefault();
                    if (typeof harvestAllReadyCrops === 'function') harvestAllReadyCrops();
                } else if (pressed === (gameState.keybinds.plantAll || 't')) {
                    e.preventDefault();
                    if (selectedGearToPlace) {
                        useSelectedGearAll();
                    } else if (typeof plantAllSelectedSeed === 'function') {
                        plantAllSelectedSeed();
                    }
                } else if (pressed === (gameState.keybinds.sellAll || 's')) {
                    e.preventDefault();
                    if (typeof sellAllProduce === 'function') sellAllProduce();
                }
            });
        }

        const handleSeasonalEvents = () => {
            // Dango Event - Expires July 5th, 2024, 4pm AEST (UTC+10), which is 6am UTC.
            // The 'Z' at the end of the date string specifies UTC time.
            const dangoExpirationDate = new Date('2024-07-05T06:00:00Z').getTime();
            const now = Date.now();

            if (now > dangoExpirationDate) {
                // If the event is over, make the dango seed unbuyable.
                // The crop data remains so players can still see/sell their existing dango.
                if (CROP_DATA['dango']) {
                    CROP_DATA['dango'].seedCost = null;
                }
            }
        };

        const PROMO_CODE_ALIASES = { 'moneypls': 'freemoney' };
        const setPromoCodeFeedback = (message, kind) => {
            const el = document.getElementById('promo-code-feedback');
            if (!el) return;
            el.textContent = message || '';
            el.className = 'promo-code-feedback';
            if (message && kind) el.classList.add(`promo-code-feedback--${kind}`);
        };
        const PROMO_REWARDS = {
            'freemoney': (state) => {
                state.money += 30000;
                addMessage("Promo 'FREEMONEY' redeemed: +30K💰!", 'success', true);
            },
            '67': (state) => {
                state.money += 67000;
                addMessage("Promo '67' redeemed: +67K💰!", 'success', true);
            },
            'dev-1billion': (state) => {
                state.money += 1000000000;
                addMessage("Promo 'DEV' redeemed: +1B💰!", 'success', true);
            },
        };

        const redeemPromoCode = () => {
            if (!gameState) return;
            const inputEl = document.getElementById('promo-code-input');
            if (!inputEl) return;
            // #region agent log
            fetch('http://127.0.0.1:7711/ingest/f0a6c53b-7ebe-41d3-94f8-ef8a60c84063',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'ef421f'},body:JSON.stringify({sessionId:'ef421f',location:'script.js:redeemPromoCode:entry',message:'redeem attempt',data:{used:Array.isArray(gameState.usedPromoCodes)?gameState.usedPromoCodes.slice():[]},timestamp:Date.now(),hypothesisId:'H4'})}).catch(()=>{});
            // #endregion
            const raw = inputEl.value.trim();
            if (!raw) {
                setPromoCodeFeedback('Enter a promo code.', 'error');
                return;
            }
            const codeNorm = normalizePromoCode(raw);
            if (!codeNorm) {
                setPromoCodeFeedback('Enter a promo code.', 'error');
                return;
            }
            mergePromoCodesIntoGameState();
            if (gameState.usedPromoCodes.includes(codeNorm)) {
                setPromoCodeFeedback('You have already redeemed this promo code.', 'error');
                return;
            }
            const promoKey = PROMO_CODE_ALIASES[codeNorm] || codeNorm;
            const handler = PROMO_REWARDS[promoKey];
            if (!handler) {
                setPromoCodeFeedback('This code does not exist or has expired.', 'error');
                return;
            }
            handler(gameState);
            rememberPromoCodeUsed(codeNorm);
            inputEl.value = '';
            setPromoCodeFeedback('');
            updateUI();
            saveGame(true);
            closeSettingsPopup();
        };

        const eraseAllProgress = () => {
            if (!confirm("This will erase ALL your Web Farm progress on this device. This cannot be undone. Continue?")) {
                return;
            }
            if (!confirm("Are you absolutely sure you want to erase EVERYTHING and start over?")) {
                return;
            }
            try {
                localStorage.removeItem('webFarmSaveData');
                localStorage.removeItem('webFarmFirstStartGivenSeeds');
                localStorage.removeItem('webFarmWelcomeBonusGiven');
                localStorage.removeItem(REDEEMED_PROMOS_STORAGE_KEY);
            } catch (e) {
                console.warn("Error clearing localStorage during eraseAllProgress:", e);
            }
            addMessage("All progress erased. Starting a fresh farm...", 'success', true);
            initializeNewGame();
            updateUI();
            saveGame(true);
        };

        const openSettingsPopup = () => {
            setPromoCodeFeedback('');
            const backdrop = document.getElementById('settings-modal-backdrop');
            const farmNameInput = document.getElementById('farm-name-input');
            if (farmNameInput && gameState && typeof gameState.farmName === 'string') {
                farmNameInput.value = gameState.farmName;
            }
            const kbHarvest = document.getElementById('keybind-harvest-all');
            const kbPlant = document.getElementById('keybind-plant-all');
            const kbSell = document.getElementById('keybind-sell-all');
            if (gameState && gameState.keybinds) {
                if (kbPlant) kbPlant.value = (gameState.keybinds.plantAll || '1').toUpperCase();
                if (kbHarvest) kbHarvest.value = (gameState.keybinds.harvestAll || '2').toUpperCase();
                if (kbSell) kbSell.value = (gameState.keybinds.sellAll || '3').toUpperCase();
            }
            if (backdrop) {
                backdrop.classList.add('active');
            }
        };

        const closeSettingsPopup = () => {
            const backdrop = document.getElementById('settings-modal-backdrop');
            if (backdrop) {
                backdrop.classList.remove('active');
            }
        };

        const applyFarmName = () => {
            if (!gameState) return;
            const input = document.getElementById('farm-name-input');
            const heading = document.getElementById('farm-name');
            if (!input || !heading) return;
            const raw = input.value.trim();
            const name = raw.length > 0 ? raw.slice(0, 32) : 'Your Farm';
            gameState.farmName = name;
            heading.textContent = gameState.farmName;
            addMessage(`Farm name set to "${gameState.farmName}".`, 'info', true);
            saveGame(true);
        };

        const applyKeybinds = () => {
            if (!gameState) return;
            if (!gameState.keybinds) gameState.keybinds = { plantAll: '1', harvestAll: '2', sellAll: '3' };
            const kbHarvest = document.getElementById('keybind-harvest-all');
            const kbPlant = document.getElementById('keybind-plant-all');
            const kbSell = document.getElementById('keybind-sell-all');

            const norm = (el, fallback) => {
                if (!el) return fallback;
                const v = el.value.trim();
                if (!v) return fallback;
                return v[0].toLowerCase();
            };

            gameState.keybinds.plantAll = norm(kbPlant, gameState.keybinds.plantAll || '1');
            gameState.keybinds.harvestAll = norm(kbHarvest, gameState.keybinds.harvestAll || '2');
            gameState.keybinds.sellAll = norm(kbSell, gameState.keybinds.sellAll || '3');

            addMessage(`Keybinds updated: Plant=${gameState.keybinds.plantAll.toUpperCase()}, Harvest=${gameState.keybinds.harvestAll.toUpperCase()}, Sell=${gameState.keybinds.sellAll.toUpperCase()}.`, 'info', true);
            saveGame(true);
        };

        const initGame = () => {
            handleSeasonalEvents(); // Check for limited-time events first
            if (gameLoopInterval) clearInterval(gameLoopInterval); if (autoSaveInterval) clearInterval(autoSaveInterval); gameLoopInterval = null; autoSaveInterval = null; isModActive = false; activeModChecksum = null; CROP_DATA = JSON.parse(JSON.stringify(DEFAULT_CROP_DATA)); isDevModeEnabled = false; if (devConsoleEl) devConsoleEl.style.display = 'none'; loadFromLocalStorage(); setupEventListeners(); if (gameState) { gameLoopInterval = setInterval(gameLoop, TICK_INTERVAL); autoSaveInterval = setInterval(() => { if (gameState && !isModActive) { saveGame(true); } else if (isModActive) { /* Autosave skipped: Mod active. */ } else { console.warn("Autosave skipped: gameState null."); if (autoSaveInterval) clearInterval(autoSaveInterval); if (gameLoopInterval) clearInterval(gameLoopInterval); } }, AUTOSAVE_INTERVAL); } else { console.error("CRITICAL: Game state failed to init."); addMessage("CRITICAL ERROR INITIALIZING. Please refresh.", "error", true); }
        }

        document.addEventListener('DOMContentLoaded', initGame);

        // Copyright Guahh Inc 2026