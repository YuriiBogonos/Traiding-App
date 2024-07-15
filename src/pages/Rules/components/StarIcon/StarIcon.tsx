export const StarIcon = ({ isActive }: { isActive: boolean }) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill={isActive ? '#EA4927' : '#98979D'} // Change color based on isActive prop
    xmlns='http://www.w3.org/2000/svg'
    className='svg-icon'
  >
    <path d='M7.56074 0.325831C6.5345 3.80136 3.79786 6.54124 0.326531 7.56459C-0.108844 7.69396 -0.108844 8.30604 0.326531 8.43541C3.79592 9.46069 6.5345 12.1986 7.56074 15.6742C7.68902 16.1086 8.30904 16.1086 8.43926 15.6742C9.4655 12.1986 12.2021 9.45876 15.6735 8.43541C16.1088 8.30604 16.1088 7.69396 15.6735 7.56459C12.2041 6.54124 9.4655 3.80136 8.43926 0.325831C8.31098 -0.10861 7.69096 -0.10861 7.56074 0.325831Z' />
  </svg>
);