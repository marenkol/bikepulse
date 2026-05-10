export interface BikeStore {
  name: string
  url: string
  logoUrl: string
  price: number
}

export const KONA_DEW_E_STORES: BikeStore[] = [
    {
        name: 'Tuurin Pyörä',
        url: 'https://www.tuurinpyora.fi/tuote/kona-dew-e/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=64&domain=tuurinpyora.fi',
        price: 2400,
    },
    {
        name: 'Bikeshop.fi',
        url: 'https://www.bikeshop.fi/Kona-Dew-E-2025/ekauppa/pKODWE25/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=64&domain=bikeshop.fi',
        price: 2399,
    },
    {
        name: 'Bikeshop.fi',
        url: 'https://www.bikeshop.fi/Kona-Dew-E/ekauppa/pKODWE/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=64&domain=bikeshop.fi',
        price: 2499,
    },
    {
        name: 'Suomen Urheilupyörä',
        url: 'https://www.suomenurheilupyora.fi/kona-dew-e',
        logoUrl: 'https://www.google.com/s2/favicons?sz=64&domain=suomenurheilupyora.fi',
        price: 1399,
    },
    {
        name: 'Suomen Urheilupyörä',
        url: 'https://www.suomenurheilupyora.fi/kona-dew-e-',
        logoUrl: 'https://www.google.com/s2/favicons?sz=64&domain=suomenurheilupyora.fi',
        price: 2499,
    },
    {
        name: 'Simple Bike Store',
        url: 'https://www.simplebikestore.eu/products/kona-dew-e',
        logoUrl: 'https://www.google.com/s2/favicons?sz=64&domain=simplebikestore.eu',
        price: 2599,
    },
    {
        name: 'Bikeshop.fi',
        url: 'https://www.bikeshop.fi/Kona-Dew-E-DL/ekauppa/pKODWEDL/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=64&domain=bikeshop.fi',
        price: 2599,
    },
    {
        name: 'Suomen Urheilupyörä',
        url: 'https://www.suomenurheilupyora.fi/kona-dew-e-dl',
        logoUrl: 'https://www.google.com/s2/favicons?sz=64&domain=suomenurheilupyora.fi',
        price: 3199,
    },
];

// Timestamp of when prices were researched
export const PRICE_UPDATED_AT = new Date('2026-05-10T10:30:00')

export const MIN_PRICE = Math.min(...KONA_DEW_E_STORES.map((s) => s.price))
