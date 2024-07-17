import React from 'react'

const Map = () => {
    return (
        <div style={{ maxWidth: '100%', listStyle: 'none', transition: 'none', overflow: 'hidden', width: '1910px', height: '300px' }}>
            <div id="google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
            <iframe
                style={{ height: '100%', width: '100%', border: '0' }}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=ips+academy,+institute+of+engineering&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen
            ></iframe>
            </div>
            <style>{`
            #google-maps-canvas img.text-marker {
                max-width: none !important;
                background: none !important;
            }
            img {
                max-width: none;
            }
            `}</style>
        </div>
    )
}

export default Map