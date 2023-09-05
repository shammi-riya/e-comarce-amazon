import img1 from '../../../assets/arivals/HomeV4_01.jpg';
import img2 from '../../../assets/arivals/HomeV4_02.jpg';
import img3 from '../../../assets/arivals/HomeV4_03.jpg';

const Newarivals = () => {
  return (
    <div className='container mx-auto'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
      <div className='col'>
        <img className='img-fluid' src={img1} alt="" />
      </div>
      <div className='col'>
        <img className='img-fluid' src={img2} alt="" />
      </div>-
      <div className='col'>
        <img className='img-fluid' src={img3} alt="" />
      </div>
    </div>
    </div>

  );
};

export default Newarivals;
