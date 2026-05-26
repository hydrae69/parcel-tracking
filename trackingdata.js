// Mock database of parcels (Backend simulation)
const parcelsDB = {
    "PT123456789": {
        trackingNumber: "PT123456789",
        status: "delivered",
        recipient: "John Doe",
        from: "New York, NY",
        to: "Los Angeles, CA",
        weight: "2.5 kg",
        timeline: [
            { date: "2024-01-15 14:30", status: "Delivered", location: "Los Angeles, CA", icon: "fas fa-check-circle" },
            { date: "2024-01-14 09:15", status: "Out for Delivery", location: "Los Angeles, CA", icon: "fas fa-truck" },
            { date: "2024-01-13 16:45", status: "Arrived at Sorting Facility", location: "Los Angeles Hub", icon: "fas fa-warehouse" },
            { date: "2024-01-12 11:20", status: "In Transit", location: "En route to LA", icon: "fas fa-shipping-fast" },
            { date: "2024-01-11 08:00", status: "Picked Up", location: "New York, NY", icon: "fas fa-hand-paper" }
        ]
    },
    "PT987654321": {
        trackingNumber: "PT987654321",
        status: "in-transit",
        recipient: "Jane Smith",
        from: "Chicago, IL",
        to: "Miami, FL",
        weight: "1.8 kg",
        timeline: [
            { date: "2024-01-14 10:30", status: "In Transit", location: "Atlanta, GA", icon: "fas fa-shipping-fast" },
            { date: "2024-01-13 15:45", status: "Departed Facility", location: "Atlanta Hub", icon: "fas fa-plane" },
            { date: "2024-01-12 09:00", status: "Arrived at Sorting Facility", location: "Atlanta Hub", icon: "fas fa-warehouse" }
        ]
    },
    "PT555666777": {
        trackingNumber: "PT555666777",
        status: "pending",
        recipient: "Mike Johnson",
        from: "Seattle, WA",
        to: "Boston, MA",
        weight: "4.2 kg",
        timeline: [
            { date: "2024-01-14 08:00", status: "Order Confirmed", location: "Seattle, WA", icon: "fas fa-file-invoice" }
        ]
    }
};