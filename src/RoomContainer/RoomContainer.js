import React, { useState, useEffect } from 'react';
import data from "../data.json";
import Room from '../Room/Room';
import { Watch } from 'react-loader-spinner';

const RoomContainer = () => {
  const images = data.hotel_details.images || [];
  const videos = data.hotel_details.new_videos || [];
  const allRooms = data.rooms_by_serial_no[0].rooms || [];
  
  const [rooms, setRooms] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMoreRooms = () => {
    if (rooms.length < allRooms.length) {
      setTimeout(() => {
        setRooms(prevRooms => [
          ...prevRooms,
          ...allRooms.slice(prevRooms.length, prevRooms.length + 10)
        ]);
        setLoading(false); // Hide loading indicator after rooms are fetched
      }, 1000);
    } else {
      setHasMore(false);
    }
  };
  
  useEffect(() => {
    // Initial load of first 10 rooms
    setTimeout(() => {
      setRooms(allRooms.slice(0, 10)); // Load first 10 rooms
      setLoading(false); // Hide loading indicator after initial load
    }, 1000);
    
    // Infinite Scroll Listener
    const handleScroll = (e) => {
      const container = e.target;
      if (container.scrollHeight - container.scrollTop <= container.clientHeight + 50 && hasMore && !loading) {
        loadMoreRooms();
      }
    };
    
    const scrollContainer = document.querySelector('.scrollContainer');
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);
  
  return (
    <div className="scrollContainer" style={{ height: '500px', overflowY: 'scroll' }}>
      {loading ? (
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
        />
      ) : error ? (
        <p>{error}</p>
      ) : rooms.length > 0 ? (
        <Room images={images} videos={videos} rooms={rooms} />
      ) : (
        <p>{loading ? "Loading..." : "No rooms available."}</p>
      )}
      {!hasMore && <p>No more rooms to load.</p>}
    </div>
  );
};

export default RoomContainer;
