
export default function Button({children, mode, Icon, ...props}) {
 // Todo: Build this component!
 const isIcon = Icon ? 'icon-button' : '';
  let classes = `button ${mode}-button ${isIcon}`;
  if (!mode) {
    classes = `button filled-button ${isIcon}`
  }
  
  const IconContainer = Icon;
  const icondey = Icon !== undefined;
  console.log(icondey);
 // !!! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
 // Also wrap the children prop with a <span>
 return (
    <button className={classes} {...props}>
      {Icon && (
        <span className='button-icon'><IconContainer/></span>
      )}
      
      <span>{children}</span>
      
      </button>
     )
}

{/* <span className='button-icon'><Icon/></span> */}