import React, {useState} from 'react';
import "./Room.css";

const Room = (props) => {
  const { videos, rooms, images } = props;
  return (
    <>
      {rooms.map((room, index) => {
        const video = videos[index]; // Get the corresponding video based on index

        return (
          <div key={room.variants[0].display_properties[0].value} className='videoContainer'>
            {video ? ( // Check if there is a video for this room
              <video width="500" height="500" className='video' controls>
            
                <source src={video.video_url.med} type="video/mp4"  />
              </video>
            ) : images ? (
              <div className='images'>
                {images.map((image, imgIndex) => (
                  <img key={imgIndex} src={image.twoX.square} alt={image} width="500" height="500" loading="lazy"/>
                ))}
              </div>
            ) : null}
            <h3>Room Information</h3>
            <div className ="roomInformation">
            {room.variants.map((variant, index) => (
              <div key={index} className="variant">
                <div className="roomType">
                  {variant.display_properties[0].value} {/* Room Type */}
                </div>
                <div className="bedType">
                  {variant.display_properties[1].value} {/* Bed Type */}
                </div>
                <div className="adultOccupancy">
                  {variant.display_properties[2].value} {/* Adult Occupancy */}
                </div>
                <div className="priceInfo">
                  {variant.price_info} {/* Price Information */}
                </div>
                <div className='Taxes'>
                  <span>Includes taxes & fees</span>
                </div>
                <div className='outerPriceContainer'>
                  <div className='totalPrice'>{variant.total_price.total_price_rounded}</div>
                  <div className='discountedPrice'>{variant.total_price.discounted_price_rounded}</div>
                  <div className='offerTitle'>{variant.total_price.promo_list[0].offer_title}</div>
                </div>
              </div>
            )
            )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Room;