function Recommendation() {
    
    const currentMonth = new Date().getMonth();
  
    
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
  
    
    return isSpring ? (
      
      <div>It's spring, time to repot!</div>
    ) : (
      
      <div>It's not spring yet, so no need to repot.</div>
    );
  }
  
  export default Recommendation;
  