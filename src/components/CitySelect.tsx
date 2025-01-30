import { useState, useTransition } from 'react';

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco', 'Miami', 'Seattle', 'Boston', 'Denver', 'Dallas'];

interface CitySelectProps {
  onSelect: (city: string) => void;
  selectedCity: string;
}

export default function CitySelect({ onSelect, selectedCity }: CitySelectProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    startTransition(() => {
      if (query.length > 0) {
        setShowDropdown(true);
        setFilteredCities(cities.filter(city => city.toLowerCase().includes(query.toLowerCase())));
      } else {
        setShowDropdown(false);
        setFilteredCities(cities);
      }
    });
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar ciudad..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full rounded border p-2 text-black"
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />

      {isPending && <p className="text-sm text-gray-500">Cargando...</p>}

      {showDropdown && filteredCities.length > 0 && (
        <ul className="absolute left-0 mt-1 max-h-40 w-full overflow-y-auto rounded border bg-white text-black shadow-lg">
          {filteredCities.map(city => (
            <li
              key={city}
              onClick={() => {
                onSelect(city);
                setSearchTerm(city);
                setShowDropdown(false);
              }}
              className={`cursor-pointer p-2 hover:bg-blue-100 ${selectedCity === city ? 'bg-blue-200' : ''}`}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
