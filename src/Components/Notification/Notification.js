import React, { useEffect } from 'react';
import './Notification.css';
function Notification() {
    useEffect(() => {
        populateNews1();
        populateNews2();
    }); // Run only once when component mounts

    const newsData1 = [
        { title: "News Article 1", content: "Lorem ipsum dolor sit amet.", date: "2023-09-14", link: "https://example.com/news1" },
        { title: "News Article 2", content: "Consectetur adipiscing elit.", date: "2023-09-13", link: "https://example.com/news2" },
        { title: "News Article 3", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-09-12", link: "https://example.com/news3" },
        { title: "News Article 4", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-09-12", link: "https://example.com/news3" },
        { title: "News Article 5", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-09-12", link: "https://example.com/news3" },
        // Add more news articles as needed for notice board 1
    ];

    const newsData2 = [
        { title: "Important Update 1", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", date: "2023-09-11", link: "https://example.com/update1" },
        { title: "Important Update 2", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", date: "2023-09-10", link: "https://example.com/update2" },
        { title: "Important Update 3", content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Important Update 4", content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Important Update 5", content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.", date: "2023-09-09", link: "https://example.com/update3" },
        // Add more updates as needed for notice board 2
    ];

    function populateNews1() {
        const newsList1 = document.getElementById('news-list-1');
        newsData1.forEach(news => {
            const listItem = document.createElement('li');
            listItem.classList.add('items');
            const link = document.createElement('a');
            link.href = news.link;
            link.textContent = `${news.title} - Date: ${news.date}`;
            listItem.appendChild(link);
            newsList1.appendChild(listItem);
        });
    }

    function populateNews2() {
        const newsList2 = document.getElementById('news-list-2');
        newsData2.forEach(news => {
            const listItem = document.createElement('li');
            listItem.classList.add('items');
            const link = document.createElement('a');
            link.href = news.link;
            link.textContent = `${news.title} - Date: ${news.date}`;
            listItem.appendChild(link);
            newsList2.appendChild(listItem);
        });
    }

    return (
        <>
            <h1 className='main-head'>Notifications</h1>
            <div className="news">
                <div className="notice-board" id="notice-board-1">
                    <h1 className='news-head'>Latest News</h1>
                    <div className="scroll-container">
                        <ul id="news-list-1" className='ssb'></ul>
                    </div>
                </div>

                <div className="notice-board" id="notice-board-2">
                    <h1 className='news-head'>Important Updates</h1>
                    <div className="scroll-container">
                        <ul id="news-list-2" className='ssb'></ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;
