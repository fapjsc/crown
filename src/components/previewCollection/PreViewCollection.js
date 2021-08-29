import classes from './PreviewCollection.module.scss';
import CollectionItem from './CollectionItem';

const PreViewCollection = ({ title, items }) => {
  //=== Jsx Element
  const collectionItemEl = items
    .filter((_, index) => index < 4)
    .map(item => <CollectionItem key={item.id} {...item} />);

  return (
    <div className={classes.collectionPreview}>
      <h1 className={classes.title}>{title.toUpperCase()}</h1>
      <div className={classes.preview}>{collectionItemEl}</div>
    </div>
  );
};

export default PreViewCollection;
