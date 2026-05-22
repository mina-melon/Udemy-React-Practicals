export default function UserInput({ handleChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          {/* initial investment input */}
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          {/* annual investment input */}
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
            value={userInput.annualInvestment}
          />
        </p>
        <p>
          {/* expected return input */}
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          {/* duration input */}
          <label>DURATION</label>
          <input
            type="number"
            min="1"
            onChange={(e) => handleChange("duration", e.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
