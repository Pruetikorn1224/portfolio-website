const Thesis = () => {

    const DynamicLink = ({ url, linkText }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" className='bg-blue-900 text-white w-20 h-10 py-1 mr-2 text-center text-xl rounded-full'>
          {linkText}
        </a>
    );

    return (
       <section id='thesis' className='w-full h-fit font-sans px-32 pb-6 animate-start max-xl:h-fit max-md:px-16 max-sm:px-8'>
        <div className='w-full h-full items-center justify-center flex flex-col'>
            <div className='w-full bg-slate-700 h-px mb-16 max-sm:w-5/6'></div>
            <p className='text-4xl font-bold mb-20'>Theses</p>
            <div className='justify-center w-full h-auto flex flex-col'>
                <div className='flex flex-col flex-wrap py-8 px-8 mb-4 bg-white border border-blue-900'>
                    <h3 className='text-2xl font-bold'>Blended Environment in Mixed Reality Remote Collaboration: User Interaction Experiment</h3>
                    <div>Master's Degree, 2024 (Grade: 72)</div>
                    <div className='flex flex-row mt-4'>
                        <DynamicLink url="https://github.com/Pruetikorn1224/MR-Remote-Collaboration-Blended-Environment" linkText="Code" />
                        <DynamicLink url="https://drive.google.com/file/d/11jj9uQvSdELmnbeqnwm_vrCcDV3Cmbj-/view?usp=sharing" linkText="PDF" />
                    </div>
                </div>
                <div className='flex flex-col flex-wrap py-8 px-8 mt-4 bg-white border border-blue-900'>
                    <h3 className='text-2xl font-bold'>Exercise Game with Pose Estimation</h3>
                    <div>Bachelor's Degree, 2023 (Grade: A)</div>
                    <div className='flex flex-row mt-4'>
                        <DynamicLink url="https://github.com/Pruetikorn1224/exercise_game_pose_estimation" linkText="Code" />
                        <DynamicLink url="https://drive.google.com/file/d/1DPrELmB-EeESi4SsqAAY7L-ieDJMD9cq/view?usp=sharing" linkText="PDF" />
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
}

export default Thesis