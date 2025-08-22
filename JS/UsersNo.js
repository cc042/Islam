import PocketBase from 'https://cdn.jsdelivr.net/npm/pocketbase/dist/pocketbase.es.mjs'

// Connect to PocketBase server
const pb = new PocketBase("http://127.0.0.1:8090")

// Get user's IP address
async function getUserIP() {
    try {
        const res = await fetch("https://api64.ipify.org?format=json")
        const data = await res.json()
        return data.ip
    } catch (error) {
        console.error("Failed to get IP address:", error)
        // Fallback to a random identifier if IP API fails
        return "unknown-" + Math.random().toString(36).substring(2, 10)
    }
}

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
    const today = new Date()
    return today.toISOString().split("T")[0]
}

// Log a unique daily visit
async function logUniqueDailyVisit() {
    try {
        const ip = await getUserIP()
        const today = getTodayDate()

        console.log(`Checking visit for IP: ${ip} on date: ${today}`)

        // First, try to create the record directly
        // This is simpler and follows the principle of "visitors can only create"
        await pb.collection("visitors_ips").create({
            ip: ip,
            date: today,
            created: new Date().toISOString()
        })

        console.log(`✅ New visit recorded for ${today} from IP: ${ip}`)

    } catch (err) {
        console.error("❌ Error recording visit:", err.message)

        // More detailed error information
        if (err.url) {
            console.error("Request URL:", err.url)
        }
        if (err.status) {
            console.error("HTTP Status:", err.status)

            // Handle 404 error specifically
            if (err.status === 404) {
                console.error("The collection 'visitors_lps' was not found.")
                console.error("Please create this collection in your PocketBase admin panel.")
            }
        }
    }
}

// Run when page loads
window.addEventListener("DOMContentLoaded", logUniqueDailyVisit)