import classes from './CollectionItem.module.scss';
const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className={classes.collectionItem}>
      <div className={classes.image} style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className={classes.collectionFooter}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{`＄${price}`}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
