const vendors = [
    {
        id: 'my-restaurant', name: 'Chick-Keen', location: 'Mahallah Bilal', openHours: '10:00 am - 10:00 pm', isOpen: true,
        menu: [
            { id: 'my-1', name: 'Dish 1', description: 'spicy', price: 5, category: 'chicken', available: true },
            { id: 'my-2', name: 'Dish 2', description: 'sweet', price: 10, category: 'chicken', available: true },
            { id: 'my-3', name: 'Dish 3', description: 'sour', price: 15, category: 'chicken', available: true }
        ]
    },
    {
        id: 'kafe-Ali', name: 'singgah-luu', location: 'Kafe-Ali', openHours: '10:00 am - 10:00 pm', isOpen: true, 
        menu: [
            { id: 'my-4', name: 'Roti Itik', description: 'spicy', price: 5, category: 'duck', available: true },
            { id: 'my-5', name: 'Nasi Lembu', description: 'rice', price: 10, category: 'lamb', available: true },
            { id: 'my-6', name: 'Xtra-Joss', description: 'sweet', price: 3, category: 'drinks', available: true }
        ]
    }
]
export default vendors