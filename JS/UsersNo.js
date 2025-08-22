// UsersNo.js - Real-time User Visit Tracker
// Tracks website visitors and counts their visits with real-time updates

class UserVisitTracker {
    constructor() {
        this.binId = null;
        // REPLACE THIS WITH YOUR API KEY FROM JSONBIN.IO
        this.apiKey = '$2a$10$Cqk11dxLv5F26PaLKdT1CecLnMUFv8TqxE/rUQ800Npe2oDEML1IO';
        this.users = [];
        this.isInitialized = false;
        this.updateCallbacks = [];
        this.autoUpdateInterval = null;
    }

    // Initialize the tracker
    async init() {
        if (this.isInitialized) {
            console.log('User tracker already initialized');
            return true;
        };

        try {
            console.log('Initializing user tracker...');

            // Check if we have a bin ID in localStorage
            const storedBinId = localStorage.getItem('userTrackerBinId');

            if (storedBinId) {
                this.binId = storedBinId;
                await this.loadUserData();
                console.log('Loaded existing user data');
            } else {
                // Create a new bin if none exists
                await this.createBin();
                console.log('Created new storage bin');
            }

            this.isInitialized = true;
            console.log('User Visit Tracker initialized successfully');

            // Start auto-update if needed
            this.startAutoUpdate();

            return true;
        } catch (error) {
            console.error('Failed to initialize User Visit Tracker:', error);
            return false;
        }
    }

    // Create a new bin on JSONBin.io
    async createBin() {
        try {
            const response = await fetch('https://api.jsonbin.io/v3/b', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': this.apiKey,
                    'X-Bin-Name': 'Website User Visits - Real-time'
                },
                body: JSON.stringify({
                    users: [],
                    totalVisits: 0,
                    lastUpdated: new Date().toISOString()
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Error Response:', errorText);
                throw new Error(`Failed to create bin. Status: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            this.binId = data.metadata.id;
            localStorage.setItem('userTrackerBinId', this.binId);
            console.log('Created new bin:', this.binId);
            return this.binId;
        } catch (error) {
            console.error('Error creating bin:', error);
            throw error;
        }
    }

    // Load user data from the bin
    async loadUserData() {
        try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${this.binId}`, {
                headers: {
                    'X-Master-Key': this.apiKey
                }
            });

            if (!response.ok) {
                throw new Error('Failed to load user data. Status: ' + response.status);
            }

            const data = await response.json();
            this.users = data.record.users || [];
            console.log('Loaded user data:', this.users.length, 'users');
        } catch (error) {
            console.error('Error loading user data:', error);
            throw error;
        }
    }

    // Update the bin with new user data
    async updateBin() {
        try {
            const updateData = {
                users: this.users,
                totalVisits: this.getTotalVisits(),
                lastUpdated: new Date().toISOString()
            };

            const response = await fetch(`https://api.jsonbin.io/v3/b/${this.binId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': this.apiKey
                },
                body: JSON.stringify(updateData)
            });

            if (!response.ok) {
                throw new Error('Failed to update bin. Status: ' + response.status);
            }

            console.log('Bin updated successfully');

            // Notify all subscribers
            this.notifySubscribers();

            return true;
        } catch (error) {
            console.error('Error updating bin:', error);
            throw error;
        }
    }

    // Find or create user
    findOrCreateUser(userId) {
        let user = this.users.find(u => u.id === userId);

        if (!user) {
            user = {
                id: userId,
                firstVisit: new Date().toISOString(),
                totalVisits: 0,
                lastVisit: null,
                userAgent: navigator.userAgent,
                referrer: document.referrer || 'direct'
            };
            this.users.push(user);
        }

        return user;
    }

    // Generate a unique user ID
    getUserId() {
        let userId = localStorage.getItem('userId');

        if (!userId) {
            // Generate a unique ID if none exists
            userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
            localStorage.setItem('userId', userId);
        }

        return userId;
    }

    // Record a new user visit
    async recordVisit() {
        try {
            if (!this.isInitialized) {
                const initialized = await this.init();
                if (!initialized) return;
            }

            const userId = this.getUserId();
            const user = this.findOrCreateUser(userId);

            // Update visit count
            user.totalVisits++;
            user.lastVisit = new Date().toISOString();

            try {
                const updated = await this.updateBin();
                if (updated) {
                    console.log('Recorded user visit:', {
                        userId: userId,
                        totalVisits: user.totalVisits,
                        isNewUser: user.totalVisits === 1
                    });

                    return {
                        userId: userId,
                        totalVisits: user.totalVisits,
                        isNewUser: user.totalVisits === 1,
                        userData: user
                    };
                }
            } catch (error) {
                console.error('Failed to record visit:', error);
                throw error;
            }
        } catch (error) {
            console.error('Error in recordVisit:', error);
            return null;
        }
    }

    // Get total number of unique users
    getTotalUsers() {
        return this.users.length;
    }

    // Get total number of visits across all users
    getTotalVisits() {
        return this.users.reduce((total, user) => total + user.totalVisits, 0);
    }

    // Get user data for analytics
    getUserData() {
        return this.users;
    }

    // Get specific user data
    getUser(userId) {
        return this.users.find(user => user.id === userId);
    }

    // Subscribe to updates
    onUpdate(callback) {
        this.updateCallbacks.push(callback);

        // Return unsubscribe function
        return () => {
            this.updateCallbacks = this.updateCallbacks.filter(cb => cb !== callback);
        };
    }

    // Notify all subscribers
    notifySubscribers() {
        const data = {
            totalUsers: this.getTotalUsers(),
            totalVisits: this.getTotalVisits(),
            users: this.users,
            lastUpdated: new Date().toISOString()
        };

        this.updateCallbacks.forEach(callback => {
            try {
                callback(data);
            } catch (error) {
                console.error('Error in update callback:', error);
            }
        });
    }

    // Start auto-update interval
    startAutoUpdate(interval = 30000) { // Default 30 seconds
        if (this.autoUpdateInterval) {
            clearInterval(this.autoUpdateInterval);
        }

        this.autoUpdateInterval = setInterval(() => {
            this.loadUserData().catch(error => {
                console.error('Auto-update failed:', error);
            });
        }, interval);

        console.log('Started auto-update every', interval, 'ms');
    }

    // Stop auto-update
    stopAutoUpdate() {
        if (this.autoUpdateInterval) {
            clearInterval(this.autoUpdateInterval);
            this.autoUpdateInterval = null;
            console.log('Stopped auto-update');
        }
    }

    // Get real-time stats
    getStats() {
        return {
            totalUsers: this.getTotalUsers(),
            totalVisits: this.getTotalVisits(),
            averageVisitsPerUser: this.getTotalUsers() > 0 ?
                (this.getTotalVisits() / this.getTotalUsers()).toFixed(2) : 0,
            newUsersToday: this.getNewUsersToday(),
            activeUsersToday: this.getActiveUsersToday()
        };
    }

    // Get new users today
    getNewUsersToday() {
        const today = new Date().toDateString();
        return this.users.filter(user => {
            const userDate = new Date(user.firstVisit).toDateString();
            return userDate === today;
        }).length;
    }

    // Get active users today
    getActiveUsersToday() {
        const today = new Date().toDateString();
        return this.users.filter(user => {
            if (!user.lastVisit) return false;
            const lastVisitDate = new Date(user.lastVisit).toDateString();
            return lastVisitDate === today;
        }).length;
    }
}

// Create a global instance
const userTracker = new UserVisitTracker();

// Initialize and record visit when DOM is loaded
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => userTracker.recordVisit(), 1000);
        });
    } else {
        setTimeout(() => userTracker.recordVisit(), 1000);
    }
}

// Make the tracker available globally
if (typeof window !== 'undefined') {
    window.userTracker = userTracker;

    // Add real-time update example
    window.setupRealTimeUpdates = function (updateCallback) {
        return userTracker.onUpdate(updateCallback);
    };

    // Example usage for real-time updates:
    /*
    const unsubscribe = setupRealTimeUpdates((data) => {
        console.log('Real-time update:', data);
        // Update your UI here with the new data
        document.getElementById('userCount').textContent = data.totalUsers;
        document.getElementById('visitCount').textContent = data.totalVisits;
    });
    */
}

// Export for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UserVisitTracker;
}