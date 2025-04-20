// src/App.jsx
import PortfolioCard from './components/PortfolioCard';

function App() {
  return (
    <div className="app-background">
      <style>{`.project.card { text-decoration: none; }`}</style>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <PortfolioCard />
</div>
      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <a className="project card" href="https://github.com/Calvinzheng123/Soccer-api" target="_blank" rel="noopener noreferrer">
            <h3>LionAPI Python Package</h3>
            <p>Published a PyPi package with FastAPI to serve soccer match data scraped from multiple sources and stored in AWS MySQL.</p>
          </a>
          <a className="project card" href="https://tft-roll.netlify.app/" target="_blank" rel="noopener noreferrer">
            <h3>TFT Roll Probability Calculator</h3>
            <p>Built a Flask web app using binomial distribution logic to help users calculate in-game unit probabilities.</p>
          </a>
          <a className="project card" href="https://github.com/Calvinzheng123/CL-model" target="_blank" rel="noopener noreferrer">
            <h3>Champions League Model</h3>
            <p>Trained a multi-class classifier on 5 years of tournament data to predict team progression with 73.8% accuracy.</p>
          </a>
          <a className="project card" href="https://github.com/Calvinzheng123/xA-Model" target="_blank" rel="noopener noreferrer">
            <h3>Expected Assists Model</h3>
            <p>Used logistic regression to assign xA probabilities to key passes scraped from WhoScored across the Premier League.</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
