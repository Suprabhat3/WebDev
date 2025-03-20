
    const books = [
        // Self Help
        {
            category: 'self-help',
            title: 'Atomic Habits',
            author: 'James Clear',
            image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'self-help',
            title: 'The Power of Now',
            author: 'Eckhart Tolle',
            image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'self-help',
            title: 'The 7 Habits of Highly Effective People',
            author: 'Stephen R. Covey',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'self-help',
            title: 'Think and Grow Rich',
            author: 'Napoleon Hill',
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },

        // Fiction
        {
            category: 'fiction',
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            image: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'fiction',
            title: 'The God of Small Things',
            author: 'Arundhati Roy',
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'fiction',
            title: 'The White Tiger',
            author: 'Aravind Adiga',
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'fiction',
            title: 'Midnight\'s Children',
            author: 'Salman Rushdie',
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },

        // Biography
        {
            category: 'biography',
            title: 'Wings of Fire',
            author: 'A.P.J. Abdul Kalam',
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'biography',
            title: 'The Story of My Experiments with Truth',
            author: 'Mahatma Gandhi',
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'biography',
            title: 'Unfinished',
            author: 'Priyanka Chopra Jonas',
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'biography',
            title: 'Playing It My Way',
            author: 'Sachin Tendulkar',
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },

        // New Category: Business
        {
            category: 'business',
            title: 'Rich Dad Poor Dad',
            author: 'Robert Kiyosaki',
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            category: 'business',
            title: 'The Lean Startup',
            author: 'Eric Ries',
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    ];

    function displayBooks(category = 'all') {
            const container = document.getElementById('booksContainer');
            container.innerHTML = '';

            const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);

            filteredBooks.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.className = 'book-card';
                bookCard.innerHTML = `
                    <img src="${book.image}" alt="${book.title}" class="book-image">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                `;
                container.appendChild(bookCard);
            });
        }

        function filterBooks(category) {
            // Remove active class from all buttons
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            event.target.classList.add('active');
            
            displayBooks(category);
        }

        // Initial display
        displayBooks();
    // (Rest of the JavaScript code remains the same)
