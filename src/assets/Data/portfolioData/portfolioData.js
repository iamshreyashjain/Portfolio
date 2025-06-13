// Images Used
import eComm from './../../../assets/Images/ProjectsImages/eComm.png'
import JainShadi from './../../../assets/Images/ProjectsImages/JainShadi.png'
import CRM from './../../../assets/Images/ProjectsImages/CRM.jpeg'

//CRM
import CheckTenant from './../../../assets/Images/ProjectsImages/CRM_Images/1CheckTenant.png'
import Registration from './../../../assets/Images/ProjectsImages/CRM_Images/2Registration.png'
import CompanyDetails from './../../../assets/Images/ProjectsImages/CRM_Images/3CompanyDetails.png'
import CompanyRegistered from './../../../assets/Images/ProjectsImages/CRM_Images/4CompanyRegistered.png'



const portfolioData = [
        {
            id: 1,
            src: CRM,
            title: "Customer Relation Management", 
            images : [
                {
                    key :1,
                    src: Registration,
                },
                { 
                    key :2,
                    src: CheckTenant,
                },
                { 
                    key :3,
                    src: CompanyDetails,
                },
                { 
                    key : 4,
                    src: CompanyRegistered,
                },
            ]
        },
        {
            id: 2,
            src: JainShadi,
            title: "Jain Shadi Admin Panel",
        },
        {
            id: 3,
            src: eComm,
            title: "E-Commerce Website",
        },
    ];
export default portfolioData