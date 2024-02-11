const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const http=require("http");
const cors=require("cors");


const app=express();
const server=http.createServer(app);
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/cdcDB");
        console.log("connected to mongodb server");
           
        // const studentSchema={
        //     Name:String,
        //     Email:String,
        //     Password:String,
        //     RegNo:Number,
        //     Branch:String
            
        // }

        const studentSchema={
            Branch:String,
            Data:[{
                Year:Number,
                Students:[{Name:String,
                        Email:String,
                        Password:String,
                        RegNo:Number,
                        RollNo:Number}]
                    
            }]
        }

        const facultySchema={
            Name:String,
            Email:String,
            Password:String
        }
        const internship={
            CName:String,
            job:String,
            descr:String,
            eligibility:String,
            Salary:Number,
            Perks:String


        }
        const job={
            CName:String,
            job:String,
            type:String,
            descr:String,
            eligibility:String,
            Salary:Number,
            Perks:String


        }
        const Jobs=mongoose.model("Jobs",job);
        const Student=mongoose.model("Student",studentSchema);
        const Faculty=mongoose.model("Faculty",facultySchema);

        async function checkStudent(res,email,password){
            const isStudentExists=await Student.findOne({Email:email,Password:password});
            if(isStudentExists){
                res.send("exists");
            }else{
                res.send("Your credentials are not found");
            }
        }

        app.post("/checkStudent",(req,res)=>{
            const email=req.body.Email;
            const password=req.body.Password;
            checkStudent(res,email,password);
        })

        async function checkFaculty(res,email,password){
            const isFacultyExists=await Faculty.findOne({Email:email,Password:password});
            if(isFacultyExists){
                res.send("exists");
            }else{
                res.send("Your credentials are not found");
            }
        }

        app.post("/checkFaculty",(req,res)=>{
            const email=req.body.Email;
            const password=req.body.Password;
            checkFaculty(res,email,password);
        })

        async function  Register(res,name,rollno,regno,email,password,branch,year){
             const isBranchexists=await Student.findOne({Branch:branch});
             console.log(isBranchexists);
             if(isBranchexists){
                //   const isyearexists=await Student.findOne({Branch:branch,"Students.Year":year});
                //   if(isyearexists){
                //        console.log(isyearexists);
                     
                //        const newStudent={Name:name,
                //         Email:email,
                //         Password:password,
                //         RegNo:regno,
                //         RollNo:rollno};
                //         await Student.findOneAndUpdate({Branch:branch,"Data.Year":year},{$push:{"Data.$.Students":newStudent}},{new:true});
                //         res.send("Done");
                //   }
                //   else{
                //     const newYear={
                //         Year:year,
                //         Students:[{Name:name,
                //             Email:email,
                //             Password:password,
                //             RegNo:regno,
                //             RollNo:rollno}],
                        

                //     };
                //     const update=await Student.findOneAndUpdate({Branch:branch},{$push:{Data:newYear}},{new:true});
                //     console.log(update);
                //     res.send("Done");
                //   }
                for(const obj of isBranchexists.Data){
                    if(obj.Year==year){
                        for(const student of obj.Students){
                            if(student.RollNo==rollno){
                                return res.send("Student exists");
                            }
                        }
                        const newStudent={Name:name,
                                    Email:email,
                                    Password:password,
                                    RegNo:regno,
                                    RollNo:rollno};
                            const addStudent=    await Student.findOneAndUpdate({Branch:branch,"Data.Year":year},{$push:{"Data.$.Students":newStudent}},{new:true});
                                   if(addStudent){
                                    return res.send("Student details added");
                                   }else{
                                    return res.send("not added");
                                   }

                    }
                }
               
                    const newYear={
                                Year:year,
                                Students:[{Name:name,
                                    Email:email,
                                    Password:password,
                                    RegNo:regno,
                                    RollNo:rollno}],
                                
        
                            };
                            const update=await Student.findOneAndUpdate({Branch:branch},{$push:{Data:newYear}},{new:true});
                            console.log(update);
                            res.send("Done");
                
             }
             else{
                const newBranch=new Student({
                    Branch:branch,
                    Data:[{
                        Year:year,
                        Students:[{Name:name,
                            Email:email,
                            Password:password,
                            RegNo:regno,
                            RollNo:rollno}],
                        

                    }]
                })
                await newBranch.save();
                return res.send("Added Successfully");
             }
        }

        app.post("/registration",(req,res)=>{
            const name=req.body.firstName;
            const rollno=req.body.Roll;
            const regno=req.body.regNo;
            const email=req.body.email;
            const password=req.body.password;
            const branch=req.body.Branch;
            const year=req.body.year;
            Register(res,name,rollno,regno,email,password,branch,year);
        })

        async function  getRegData(res,branch,year){
             const isbranchexists=await Student.findOne({Branch:branch});
             if(isbranchexists){

                for(const obj of isbranchexists.Data){
                    if(obj.Year==year){
                        res.send(obj.Students);
                    }
                }
                res.send("no year found");

                // const isyearexists=await Student.findOne({Branch:branch,"Data.year":year});
                // if(isyearexists){
                //     //   const getdetails=await Student.find({Branch:branch,"Data.year":year})
                //     //   console.log(getdetails);
                //     //   res.send(getdetails);
                //     for(const obj of isbranchexists.Data){
                //         if(obj.Year==year){
                //             res.send(obj.Students);
                //         }
                //     }
                
             }else{
                res.send("no branch found");
             }


        }

        app.post("/getRegData",(req,res)=>{
            console.log("hii");
            const branch=req.body.branch;
            const year=req.body.year;
            getRegData(res,branch,year);
        })

        app.get("/job-details", async (req, res) => {
            try {
             
              const jobDetails = await Jobs.find();
              res.status(200).json(jobDetails);
            } catch (error) {
              console.error('Error fetching job details:', error);
              res.status(500).json({ error: 'Internal Server Error' });
            }
          });
            app.post("/job", async (req,res) =>{
                  const jobData = req.body;
                  console.log('Received job data:', jobData);
                  const newJob = new Jobs(jobData);
                 await newJob.save();
                })


    }catch(err){
        console.log(err);
    }
}

main().catch(console.error);

server.listen(4500,()=>{
    console.log('Server running on port 4500');
})