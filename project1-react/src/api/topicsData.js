export const fetchTopicsData = async () => {
    const response = await fetch("/data/topics.json");
    return await response.json();
  };
  
  export const fetchTopicData = async (topicId) => {
    const response = await fetch("/data/topics.json");
      const data = await response.json();
      console.log(topicId);
      console.log(data);
      const Details = data.find((topic) => topic.id == topicId);
      console.log(Details);
      if (!Details) {
          throw new Error("Topic not found");
      }
      return Details;
  };