export async function Log({ stack = "frontend", level, pkg, message }) {
    try {
      const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stack,
          level,
          package: pkg,
          message,
        }),
      });
  
      const data = await response.json();
  
      // Ensure the data is in the expected format
      if (!data.message) {
        throw new Error('Log response does not contain a message');
      }
  
      return data;
    } catch (error) {
      console.error("Log Error:", error);
      return { message: `Log Error: ${error.message}` };  // Return a default error message if failed
    }
  }
  


  
  