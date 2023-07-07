import { useState } from "react";

function useSetting() {
  const [startDate, setStartDate] = useState("");
  const onStartDateHandler = (e) => {
    setStartDate(e.target.value);
  };

  return startDate;
}

export default useSetting;
