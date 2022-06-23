
import {
  AddCircleOutline,
  CalendarToday,
  CardTravelSharp,
  PermIdentity,
  PhoneAndroid,

} from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./vd.css";

  import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
  {
    img: 'https://as1.ftcdn.net/v2/jpg/01/71/13/04/1000_F_171130424_f8KQj028hrnzzU8aa9aMNgrNRT9JU3Wz.jpg',
    title: 'Side View',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://as1.ftcdn.net/v2/jpg/01/71/13/06/1000_F_171130622_HP31eDUD007u1KfGF9saKbVlMuKl1dV9.jpg',
    title: 'Back View',
   
  },
  {
    img: 'https://as1.ftcdn.net/v2/jpg/01/77/36/56/1000_F_177365693_8p7z5nJN0oqoRhRjfi3HBIEbMY8HtbKr.jpg',
    title: 'Front View',
    
  },
  {
    img: 'https://as2.ftcdn.net/v2/jpg/01/77/36/59/1000_F_177365917_XTCvFzybOo7gIGMFnP6uv6uapOCkUJQr.jpg',
    title: 'Front Zoom View',
   
  },
  {
    img: 'https://as1.ftcdn.net/v2/jpg/01/77/36/54/1000_F_177365429_pYwErA1nh5KNIvHzM0ZShEfL5UoRNQv2.jpg',
    title: 'Front Zoom View',
    
  },
  {
    img: 'https://as1.ftcdn.net/v2/jpg/01/77/36/56/1000_F_177365693_8p7z5nJN0oqoRhRjfi3HBIEbMY8HtbKr.jpg',
    title: 'Front Zoom View',
    
  },
  
  
];

  
  export default function User2() {
    return (
      <div className="userv">
       

 
        <div className="userContainerv">
          <div className="userShowv">
          <span className="userShowUsernamev1">Vehicle Details</span>
            <div className="userShowTopv1">
            
              
              <div className="userShowTopTitlev1">
               
                <div className="userShowTopTitlev1">
                <span className="userShowUsernamev">Vehicle Info</span>

                <div class="insuv">
            <div className="userShowInfov">
              <PermIdentity className="userShowIconv" />
              <span className="userShowInfoTitle1">Vehicle Number</span>
              <span className="userShowInfoTitle2">EN3137</span>
         
            </div>
            <div className="userShowInfov">
              <CalendarToday className="userShowIconv" />
              <span className="userShowInfoTitle1">Manufactured YEAR</span>
              <span className="userShowInfoTitle2">2012</span>

            </div>
            <div className="userShowInfov">
              <AddCircleOutline className="userShowIconv" />
              <span className="userShowInfoTitle1">Chassis Number</span>
              <span className="userShowInfoTitle2">SV30-0169266</span>
            </div>
            <div className="userShowInfov">
              <PhoneAndroid className="userShowIconv" />
              <span className="userShowInfoTitle1">Value</span>
              <span className="userShowInfoTitle2">Rs 65,000</span>
            </div>
            <div className="userShowInfov">
              <CardTravelSharp className="userShowIconv" />
              <span className="userShowInfoTitle1">Number Of Accidents</span>
              <span className="userShowInfoTitle2">1</span>
            </div>
           
          </div>
          </div>
          </div>

          
            <div className="imagelistv">
            <ImageList sx={{ width: 500, height: 450 }}>
            
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Vehicle Images</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div> 
    <div className="userShow2v">
            <div className="userShowTopv2">

          <div className="userShowTopTitlev2">
                <span className="userShowUsernamev">Insurance Details</span>

            <div class="insuv">
            <div className="userShowInfov">
              <PermIdentity className="userShowIconv" />
              <span className="userShowInfoTitle3">Type</span>
              <span className="userShowInfoTitle4">3rd Party</span>
         
            </div>
            <div className="userShowInfov">
              <CalendarToday className="userShowIconv" />
              <span className="userShowInfoTitle3">Monthly Premium</span>
              <span className="userShowInfoTitle4">1000km</span>

            </div>
            <div className="userShowInfov">
              <AddCircleOutline className="userShowIconv" />
              <span className="userShowInfoTitle3">Purchase Date</span>
              <span className="userShowInfoTitle4">4/08/2021</span>
            </div>
            <div className="userShowInfov">
              <PhoneAndroid className="userShowIconv" />
              <span className="userShowInfoTitle3">End Date</span>
              <span className="userShowInfoTitle4">5/08/2023</span>
            </div>
            <div className="userShowInfov">
              <CardTravelSharp className="userShowIconv" />
              <span className="userShowInfoTitle3">Valuee</span>
              <span className="userShowInfoTitle4">Rs 200000</span>
            </div>
           
          </div>
          </div> 

               
              </div>
              </div>
              </div>

              
            </div>
            
          </div>

          

          

    
              </div>
            
      
      
    );
  }
  




