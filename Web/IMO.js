const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.imo-official.org/organizers.aspx';

// Make a GET request to the URL
function IMO(){
  axios.get(url)
  .then(response => {
    // Load the HTML content of the page into Cheerio
    const $ = cheerio.load(response.data);

    // Extract information from the page

    // Page Title
    const pageTitle = $('title').text();
    console.log('Page Title:', pageTitle);

    // Extracting data using a for loop
    const organizers = [];
    for (let i = 2;i < 5; i++) {
      const columns = $($('tbody tr')[i]).find('td');
      const organizer = {
        rate: $(columns[0]).text().trim(),
        year: $(columns[1]).text().trim(),
        country: $(columns[2]).text().trim(),
        city: $(columns[3]).text().trim(),
        date: $(columns[4]).text().trim()
      };
      organizers.push(organizer);
    }

    console.log('Organizers:', organizers);

  })
  .catch(error => {
    console.error('Error:', error);
  });

}

module.exports = {IMO};
