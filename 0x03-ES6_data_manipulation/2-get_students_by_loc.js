const getStudentsByLocation = (students, city) => {
  const arratyObjec = students.filter((student) => student.location === city);
  return arratyObjec;
};

export default getStudentsByLocation;
