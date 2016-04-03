/*
 * 2016-03-21
 * 方鹏举个人信息
 * 
 * */


var data = new Object();
data.ID = "411123198804175513";
data.FamilyName = "方";
data.FirstName = "鹏举";
data.FullName = data.FamilyName + data.FirstName;
data.Gender = "男";

data.Phone = new Object(); // 电话
data.Phone.CompanyTelephone = "";
data.Phone.PrivateTelephone = "18589036730";

data.School = new Object(); // 学校
data.School.PrimarySchool = new Object(); // 小学
data.School.JuniorMiddleSchool = new Object(); // 初中
data.School.HighSchool = new Object(); // 高中
data.School.University = new Object(); // 大学
data.School.University.SchoolName = "郑州科技学院";
data.School.University.AcademicDegree = "本科";
data.School.University.Major = "计算机科学与技术";
data.School.University.AdmissionDate = new Date("2009-09-01"); // 入学时间
data.School.University.GraduationDate = new Date('2013-07-01'); // 毕业时间