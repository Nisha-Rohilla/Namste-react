const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
    try {
        const swiggyRes = await fetch('https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1', {
            headers: {
                'User-Agent': 'Mozilla/5.0', // 👈 Add this
                'Accept': 'application/json', // 👈 Optional
            },
        });

        const data = await swiggyRes.json();
        res.json(data);
    } catch (error) {
        console.error("Swiggy API error:", error.message);
        res.status(500).json({ error: "Failed to fetch from Swiggy" });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
