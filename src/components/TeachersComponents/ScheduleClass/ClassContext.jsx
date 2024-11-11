import React, { createContext, useContext, useState } from "react";
import { format } from "date-fns";

const ClassContext = createContext(undefined);

export function ClassProvider({ children }) {
  const [scheduledClasses, setScheduledClasses] = useState([
    {
      id: 1,
      className: "BIM 1",
      subject: "Mathematics",
      date: new Date("2024-11-15"),
      startTime: "10:00",
      endTime: "11:30",
      description: "Calculus Introduction",
    },
    {
      id: 2,
      className: "BIM 2",
      subject: "Science",
      date: new Date("2024-11-16"),
      startTime: "13:00",
      endTime: "14:30",
      description: "Physics Lab",
    },
  ]);

  const addClass = (newClass) => {
    setScheduledClasses((prev) => [
      ...prev,
      {
        ...newClass,
        id: prev.length + 1,
        date: new Date(newClass.date),
      },
    ]);
  };

  const rescheduleClass = (id, updates) => {
    setScheduledClasses((prev) =>
      prev.map((classItem) => {
        if (classItem.id === id) {
          return {
            ...classItem,
            date: new Date(updates.newDate),
            startTime: updates.startTime,
            endTime: updates.endTime,
            lastUpdated: new Date(),
          };
        }
        return classItem;
      })
    );
  };

  const value = {
    scheduledClasses,
    addClass,
    rescheduleClass,
  };

  return (
    <ClassContext.Provider value={value}>{children}</ClassContext.Provider>
  );
}

export function useClassContext() {
  const context = useContext(ClassContext);
  if (context === undefined) {
    throw new Error("useClassContext must be used within a ClassProvider");
  }
  return context;
}
