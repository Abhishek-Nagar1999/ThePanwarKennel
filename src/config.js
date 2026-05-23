export const BUSINESS = {
  name: 'The Woof House',
  owner: 'Ankit Panwar',
  tagline: 'All Breeds — Premium Puppies & Dogs in Delhi',
  phone: '+919568333393',
  phoneDisplay: '+91 95683 33393',
  whatsapp: '919568333393',
  instagram: 'https://instagram.com/the_panwar_kennel_14',
  instagramHandle: '@the_panwar_kennel_14',
  email: 'hello@thepanwar-kennel.com',
  address: 'Delhi, New Delhi, Delhi NCR, India',
  serviceAreas: [
    'South Delhi',
    'North Delhi',
    'East Delhi',
    'West Delhi',
    'Gurgaon',
    'Noida',
    'Faridabad',
    'Ghaziabad',
  ],
};

export const whatsappUrl = (message = '') => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsapp}${text ? `?text=${text}` : ''}`;
};

export const telUrl = () => `tel:${BUSINESS.phone}`;
