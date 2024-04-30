function msg() {
    alert("Succesfully Submitted");
  }







  function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.trim();

    // Fetch job listings based on the search term
    fetch(`https://github.com/Ajmal112/fresh-jobs-search.git=${encodeURIComponent(searchTerm)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the fetched data and update the DOM
            displayJobResults(data);
        })
        .catch(error => {
            console.error('Error fetching job listings:', error);
        });
}

function displayJobResults(jobListings) {
    const jobResultsContainer = document.getElementById('jobResults');
    jobResultsContainer.innerHTML = ''; // Clear previous results

    if (jobListings.length === 0) {
        jobResultsContainer.textContent = 'No jobs found.';
        return;
    }

    const resultList = document.createElement('ul');

    jobListings.forEach(job => {
        const listItem = document.createElement('li');
        listItem.textContent = `${job.title} - ${job.location}`;
        resultList.appendChild(listItem);
    });

    jobResultsContainer.appendChild(resultList);
}
