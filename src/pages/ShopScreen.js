import SHOP_DATA from '../data/shop';
import PreviewCollection from '../components/previewCollection/PreViewCollection';

const ShopScreen = () => {
  const collectionItems = SHOP_DATA.map(collection => (
    <PreviewCollection key={collection.id} items={collection.items} title={collection.title} />
  ));

  return <div className="shopPage">{collectionItems}</div>;
};

export default ShopScreen;
