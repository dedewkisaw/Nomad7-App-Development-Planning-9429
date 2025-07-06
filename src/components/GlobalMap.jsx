import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiUsers, FiWifi, FiTrendingUp } = FiIcons;

const GlobalMap = () => {
  const mapRef = useRef(null);

  // Popular nomad destinations with mock data
  const destinations = [
    { name: "Lisbon, Portugal", lat: 38.7223, lng: -9.1393, nomads: 2847, spaces: 156 },
    { name: "Bali, Indonesia", lat: -8.3405, lng: 115.0920, nomads: 3421, spaces: 203 },
    { name: "Mexico City, Mexico", lat: 19.4326, lng: -99.1332, nomads: 1923, spaces: 134 },
    { name: "Bangkok, Thailand", lat: 13.7563, lng: 100.5018, nomads: 2156, spaces: 189 },
    { name: "Berlin, Germany", lat: 52.5200, lng: 13.4050, nomads: 1734, spaces: 167 },
    { name: "Buenos Aires, Argentina", lat: -34.6037, lng: -58.3816, nomads: 1456, spaces: 98 },
    { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708, nomads: 1867, spaces: 142 },
    { name: "Medellín, Colombia", lat: 6.2442, lng: -75.5812, nomads: 1234, spaces: 87 }
  ];

  useEffect(() => {
    // Initialize map with Leaflet
    if (mapRef.current && !mapRef.current.hasChildNodes()) {
      const L = window.L;
      if (L) {
        const map = L.map(mapRef.current).setView([20, 0], 2);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add markers for each destination
        destinations.forEach(dest => {
          const marker = L.marker([dest.lat, dest.lng]).addTo(map);
          marker.bindPopup(`
            <div class="p-2">
              <h3 class="font-semibold">${dest.name}</h3>
              <p class="text-sm">Nomads: ${dest.nomads}</p>
              <p class="text-sm">Co-working Spaces: ${dest.spaces}</p>
            </div>
          `);
        });
      }
    }
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Global Nomad Network</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover thriving nomad communities and co-working spaces worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="neu-card p-6">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-nomad-blue mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Live Map</h3>
              </div>
              <div 
                ref={mapRef}
                className="map-container neu-card-pressed"
                style={{ height: '400px' }}
              >
                {/* Fallback content if map doesn't load */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-nomad-blue/20 to-nomad-purple/20 rounded-lg">
                  <div className="text-center">
                    <SafeIcon icon={FiMapPin} className="w-16 h-16 text-nomad-blue mx-auto mb-4" />
                    <p className="text-gray-600">Interactive map loading...</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Destinations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="neu-card p-6"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-nomad-green mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Top Destinations</h3>
            </div>
            <div className="space-y-4">
              {destinations.slice(0, 6).map((dest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="neu-button p-4 hover:shadow-neu-hover transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-800">{dest.name}</div>
                      <div className="text-sm text-gray-600 flex items-center mt-1">
                        <SafeIcon icon={FiUsers} className="w-3 h-3 mr-1" />
                        {dest.nomads} nomads
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-nomad-blue">{dest.spaces}</div>
                      <div className="text-xs text-gray-500">spaces</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;