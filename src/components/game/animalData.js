const animals = [
    {
        id: 1,
        name: 'Black Bear',
        img: 'https://i.imgur.com/gAKDjey.jpg',
        fact: 'Black bears are the most common bear in North America.',
        parks: [],
        found: false
    },
    {
        id: 2,
        name: 'Grizzly Bear',
        img: 'https://i.imgur.com/S4qoH7c.jpg',
        fact: 'Grizzly bears are the largest bears in North America.',
        parks: [],
        found: false
    },
    {
        id: 3,
        name: 'Pine Marten',
        img: 'https://i.imgur.com/6S0u6Zf.jpg',
        fact: 'Pine martens are small, agile members of the weasel family.',
        parks: [],
        found: false
    },
    {
        id: 4,
        name: 'American Badger',
        img: 'https://i.imgur.com/isUCGY1.jpg',
        fact: 'American badgers are known for their powerful digging abilities.',
        parks: [],
        found: false
    },
    {
        id: 5,
        name: 'Alaska Red Fox',
        img: 'https://i.imgur.com/5nFXydc.jpg',
        fact: 'Alaska red foxes are the largest subspecies of red fox.',
        parks: [],
        found: false
    },
    {
        id: 6,
        name: 'Golden-mantled Marmot',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Marmota_flaviventris_standing_S_of_Donahue_Pass.jpg/220px-Marmota_flaviventris_standing_S_of_Donahue_Pass.jpg',
        fact: 'Golden-mantled marmots are known for their whistling calls.',
        parks: []
    },
    {
        id: 7,
        name: 'Coyote',
        img: 'https://i.imgur.com/EHDpREh.png',
        fact: 'Coyotes are highly adaptable animals and can be found in a variety of habitats.',
        parks: [],
        found: false
    },
    {
        id: 8,
        name: 'Mountain Lion',
        img: 'https://i.imgur.com/PuaNTyi.png',
        fact: 'Mountain lions are the largest cats in North America.',
        parks: [],
        found: false
    },
    {
        id: 9,
        name: 'Mule Deer',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mule_buck_elk_creek_m_myatt_%285489214303%29.jpg/1024px-Mule_buck_elk_creek_m_myatt_%285489214303%29.jpg',
        fact: `Each spring, a buck's antlers start to regrow almost immediately after the old antlers are shed.`,
        parks: []
    },
    {
        id: 10,
        name: 'Fisher',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Fisher_cat_tree.jpg/640px-Fisher_cat_tree.jpg',
        fact: 'Fishers are found in a variety of habitats.',
        parks: []
    },
    {
        id: 11,
        name: 'Mantled Ground Squirrel',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Golden-mantled_ground_squirrel-8241.jpg/640px-Golden-mantled_ground_squirrel-8241.jpg',
        fact: 'Mantled ground squirrels are the largest ground squirrels in North America.',
        parks: []
    },
    {
        id: 12,
        name: 'Sierra Golden-mantled Ground Squirrel',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Golden-Mantled_Ground_Squirrel%2C_Mount_Rainier%2C_July_2006.jpg/640px-Golden-Mantled_Ground_Squirrel%2C_Mount_Rainier%2C_July_2006.jpg',
        fact: 'Sierra golden-mantled ground squirrels are found at higher elevations than other ground squirrels.',
        parks: []
    },
    {
        id: 13,
        name: 'Nushagak Ground Squirrel',
        img: 'https://www.nps.gov/parkhistory/online_books/pwro/wildlife_portfolio/images/fig14.jpg',
        fact: 'Nushagak ground squirrels are the only ground squirrels found on Kodiak Island.',
        parks: []
    },
    {
        id: 14,
        name: 'Chipmunk',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Tamias_minimus.jpg/640px-Tamias_minimus.jpg',
        fact: 'Chipmunks can climb trees and swim.',
        parks: []
    },
    {
        id: 15,
        name: 'Northern Red Squirrel',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Red_Squirrel_on_Brownsea_Island_%285332865944%29.jpg/640px-Red_Squirrel_on_Brownsea_Island_%285332865944%29.jpg',
        fact: 'Northern red squirrels are known for their aggressive behavior and their loud calls, especially when they are defending their territory.',
        parks: []
    },
    {
        id: 16,
        name: 'Sierra Chickaree',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Douglas_Squirrel_DSC2803zz.jpg/640px-Douglas_Squirrel_DSC2803zz.jpg',
        fact: 'Sierra chickarees are found in the coniferous forests of the Sierra Nevada mountains and are known for their loud calls.',
        parks: []
    }
]

export default animals

const newAnimals = [
  {
        id: 1,
        name: 'Bald Eagle',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Haliaeetus_leucocephalus_P1030546.jpg/1200px-Haliaeetus_leucocephalus_P1030546.jpg',
        fact: 'The bald eagle is a majestic bird of prey with a white head and tail, and a dark brown body. It is the national bird of the United States.',
        parks: [
            'Acadia National Park',
            'Big Bend National Park',
            'Biscayne National Park',
            'Canyonlands National Park',
            'Cape Cod National Seashore',
            'Crater Lake National Park',
            'Death Valley National Park',
            'Denali National Park and Preserve',
            'Everglades National Park',
            'Glacier National Park',
            'Grand Canyon National Park',
            'Great Smoky Mountains National Park',
            'Guadalupe Mountains National Park',
            'Katmai National Park and Preserve',
            'Kenai Fjords National Park',
            'Lake Clark National Park and Preserve',
            'Mammoth Cave National Park',
            'Mesa Verde National Park',
            'Mount Rainier National Park',
            'North Cascades National Park',
            'Olympic National Park',
            'Petrified Forest National Park',
            'Redwood National and State Parks',
            'Rocky Mountain National Park',
            'Saguaro National Park',
            'Sequoia and Kings Canyon National Parks',
            'Theodore Roosevelt National Park',
            'Voyageurs National Park',
            'Yellowstone National Park',
            'Yosemite National Park'
        ]
    },
    {
        id: 2,
        name: 'Peregrine Falcon',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Falco_peregrinus_-_B%C3%A9n%C3%A9lux_%284%29.jpg/1200px-Falco_peregrinus_-_B%C3%A9n%C3%A9lux_%284%29.jpg',
        fact: 'The peregrine falcon is a powerful falcon with a blue-gray back and a black head. It is the fastest bird in the world, capable of diving at speeds of over 200 miles per hour.',
        parks: [
          'Acadia National Park',
          'Arches National Park',
          'Badlands National Park',
          'Big Bend National Park',
          'Biscayne National Park',
          'Canyonlands National Park',
          'Capitol Reef National Park',
          'Death Valley National Park',
          'Denali National Park and Preserve',
          'Everglades National Park',
          'Glacier National Park',
          'Grand Canyon National Park',
          'Great Basin National Park',
          'Great Smoky Mountains National Park',
          'Guadalupe Mountains National Park',
          'Hot Springs National Park',
          'Joshua Tree National Park',
          'Katmai National Park and Preserve',
          'Kenai Fjords National Park',
          'Lake Clark National Park and Preserve',
          'Mammoth Cave National Park',
          'Mesa Verde National Park',
          'Mount Rainier National Park',
          'North Cascades National Park',
          'Olympic National Park',
          'Petrified Forest National Park',
          'Pinnacles National Park',
          'Redwood National and State Parks',
          'Rocky Mountain National Park',
          'Sequoia and Kings Canyon National Parks',
          'Yellowstone National Park',
          'Yosemite National Park'
        ]
      },
      {
        id: 3,
        name: 'Black-capped Chickadee',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Poecile_atricapillus-001.jpg/1200px-Poecile_atricapillus-001.jpg',
        fact: 'The black-capped chickadee is a small, friendly songbird with a black cap and bib, and white cheeks. It is one of the most common birds in North America.',
        parks: [
          'Acadia National Park',
          'Badlands National Park',
          'Big Bend National Park',
          'Biscayne National Park',
          'Canyonlands National Park',
          'Capitol Reef National Park',
          'Crater Lake National Park',
          'Denali National Park and Preserve',
          'Everglades National Park',
          'Glacier National Park',
          'Grand Canyon National Park',
          'Great Basin National Park',
          'Great Smoky Mountains National Park',
          'Guadalupe Mountains National Park',
          'Hot Springs National Park',
          'Joshua Tree National Park',
          'Katmai National Park and Preserve',
          'Kenai Fjords National Park',
          'Lake Clark National Park and Preserve',
          'Mammoth Cave National Park',
          'Mesa Verde National Park',
          'Mount Rainier National Park',
          'North Cascades National Park',
          'Olympic National Park',
          'Petrified Forest National Park',
          'Pinnacles National Park',
          'Redwood National and State Parks',
          'Rocky Mountain National Park',
          'Sequoia and Kings Canyon National Parks',
          'Theodore Roosevelt National Park',
          'Voyageurs National Park',
          'Yellowstone National Park',
          'Yosemite National Park'
        ]
      },
      {
        id: 4,
        name: 'Great Blue Heron',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ardea_herodias_2549.jpg/1200px-Ardea_herodias_2549.jpg',
        fact: 'The great blue heron is a large wading bird with a long, S-shaped neck and long legs. It is the largest heron in North America.',
        parks: [
          'Acadia National Park',
          'Biscayne National Park',
          'Canyonlands National Park',
          'Everglades National Park',
          'Glacier National Park',
          'Grand Canyon National Park',
          'Great Smoky Mountains National Park',
          'Kenai Fjords National Park',
          'Mammoth Cave National Park',
          'Olympic National Park',
          'Redwood National and State Parks',
          'Rocky Mountain National Park',
          'Yellowstone National Park',
          'Yosemite National Park'
        ]
      },
      {
        id: 5,
        name: 'Blue Jay',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Blue_Jay_at_Sandy_Hook_2.jpg/1200px-Blue_Jay_at_Sandy_Hook_2.jpg',
        fact: 'The blue jay is a large, colorful songbird with a bright blue body, white chest, and black head. It is known for its intelligence and its ability to mimic other bird calls.',
        parks: [
          'Acadia National Park',
          'Biscayne National Park',
          'Canyonlands National Park',
          'Everglades National Park',
          'Glacier National Park',
          'Grand Canyon National Park',
          'Great Smoky Mountains National Park',
          'Kenai Fjords National Park',
          'Mammoth Cave National Park',
          'Olympic National Park',
          'Redwood National and State Parks',
          'Rocky Mountain National Park',
          'Yellowstone National Park',
          'Yosemite National Park'
        ]
      },
]