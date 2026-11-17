// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = companyName.length - 1; i >= 0; i--) {  
//  เริ้มที่ตำแหน่งสุดท้าย   ; วนต่อไปถ้า i ไม่ต่ำกว่า 0 ; ลดลงที่ละ 1 (วนถอยหลัง) พอ i ลดเหลือ -1 เงื่อนไข i >= 0 เป็นเท็จ loop จึงหยุดทำงาน
  reversedCompanyName = reversedCompanyName + companyName[i];
}
console.log(reversedCompanyName);
