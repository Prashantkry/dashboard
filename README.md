# RoaDo Assignment
## Task 1 Code 
```
type Timestamp = string;
type DeviceInfo = { lastSeenAt: Timestamp };
type UserSession = {
    userId: string;
    loggedIn: Timestamp;
    loggedOut: Timestamp;
    devices: DeviceInfo[];
};

// check if a date is within a given month
function isWithinMonth(date: Date, month: number, year: number): boolean {
    return date.getMonth() + 1 === month && date.getFullYear() === year;
}

// check start and end dates of a month
function getMonthStartEnd(month: number, year: number): { start: Date, end: Date } {
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0, 23, 59, 59, 999);
    return { start, end };
}

// to get monthly logged in and active users
function getMonthlyLoggedInActiveUsers(sessions: UserSession[], month: number, year: number): { loggedInUsers: Set<string>, activeUsers: Set<string> } {
    const { start, end } = getMonthStartEnd(month, year);
    const loggedInUsers = new Set<string>();
    const activeUsers = new Set<string>();

    sessions.forEach(session => {
        const loggedIn = new Date(session.loggedIn);
        const loggedOut = new Date(session.loggedOut);
        // logged in during the month
        if (loggedIn <= end && loggedOut >= start) {
            loggedInUsers.add(session.userId);
        }
        // active during the month
        session.devices.forEach(device => {
            const lastSeen = new Date(device.lastSeenAt);
            if (isWithinMonth(lastSeen, month, year)) {
                activeUsers.add(session.userId);
            }
        });
    });
    return { loggedInUsers, activeUsers };
}

// Sample test cases
const sessions: UserSession[] = [{
    userId: 'user1',
    loggedIn: '2024-01-10T08:00:00Z',
    loggedOut: '2024-07-15T17:00:00Z',
    devices: [
        { lastSeenAt: '2024-02-15T12:00:00Z' },
        { lastSeenAt: '2024-03-20T14:30:00Z' }
    ]
},
{
    userId: 'user2',
    loggedIn: '2024-05-01T09:00:00Z',
    loggedOut: '2024-06-30T18:00:00Z',
    devices: [
        { lastSeenAt: '2024-05-10T10:00:00Z' },
        { lastSeenAt: '2024-06-25T15:45:00Z' }
    ]
},
{
    userId: 'user3',
    loggedIn: '2024-02-01T09:00:00Z',
    loggedOut: '2024-03-30T18:00:00Z',
    devices: [
        { lastSeenAt: '2024-03-10T10:00:00Z' },
        { lastSeenAt: '2024-04-25T15:45:00Z' }
    ]
}
];

const { loggedInUsers, activeUsers } = getMonthlyLoggedInActiveUsers(sessions, 6, 2024);
console.log('Logged in users in June 2024:', Array.from(loggedInUsers));
console.log('Active users in June 2024:', Array.from(activeUsers));

```

## Task 2 
```
type Point = string;
type Trip = { pickup: Point[], drop: Point[], via?: Point[] };

function isValidTrips(shipment: { pickups: Point[], drops: Point[] }, trips: Trip[]): boolean {
    const { pickups, drops } = shipment;
    // Convert pickup and drop points to Sets
    const pickupSet = new Set(pickups);
    const dropSet = new Set(drops);
    // To track all visited pickup and drop points
    const visitedPickups = new Set<Point>();
    const visitedDrops = new Set<Point>();
    // Validate each trip individually
    for (const trip of trips) {
        const { pickup, drop, via = [] } = trip;
        for (const point of [...pickup, ...drop, ...via]) 
            if (!pickupSet.has(point) && !dropSet.has(point) && !via.includes(point)) 
                return false; // Invalid point           

        // Track visited points to avoid repetition within a trip
        const visitedPoints = new Set<Point>();
        const allPoints = [...pickup, ...via, ...drop];
        for (let i = 0; i < allPoints.length; i++) {
            const point = allPoints[i];
            if (visitedPoints.has(point)) 
                return false; // Point repeated
            visitedPoints.add(point);
        }
        // Add pickup and drop points to visited set
        pickup.forEach(point => visitedPickups.add(point));
        drop.forEach(point => visitedDrops.add(point));
    }
    // pickup and drop points covered
    for (const point of pickups) 
        if (!visitedPickups.has(point)) 
            return false;
    for (const point of drops) 
        if (!visitedDrops.has(point)) 
            return false
    return true;
}
// Sample Test Cases
const shipment = {
    pickups: ['A', 'B'],
    drops: ['C', 'D']
};
const trips = [
    { pickup: ['A'], drop: ['C'], via: ['W'] },
    { pickup: ['B'], drop: ['D'], via: ['W'] }
];
console.log("Is it a valid trip: ", isValidTrips(shipment, trips));

```

## Task 3
```
Code is in github 
```
[Git URL](https://github.com/Prashantkry/dashboard)
[Hosted URL]()
