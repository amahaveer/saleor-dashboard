import { channelsList } from "@saleor/channels/fixtures";
import { createChannelsData } from "@saleor/channels/utils";
import { fetchMoreProps } from "@saleor/fixtures";
import { ProductErrorCode } from "@saleor/types/globalTypes";
import { warehouseList } from "@saleor/warehouses/fixtures";
import { storiesOf } from "@storybook/react";
import React from "react";

import ProductCreatePage, {
  ProductCreatePageSubmitData
} from "../../../products/components/ProductCreatePage";
import { product as productFixture } from "../../../products/fixtures";
import { productTypes } from "../../../productTypes/fixtures";
import Decorator from "../../Decorator";

const product = productFixture("");
const channels = createChannelsData(channelsList);

storiesOf("Views / Products / Create product", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <ProductCreatePage
      currentChannels={channels}
      allChannelsCount={5}
      hasChannelChanged={false}
      currency="USD"
      disabled={false}
      errors={[]}
      header="Add product"
      collections={product.collections}
      fetchCategories={() => undefined}
      fetchCollections={() => undefined}
      fetchProductTypes={() => undefined}
      fetchMoreCategories={fetchMoreProps}
      fetchMoreCollections={fetchMoreProps}
      fetchMoreProductTypes={fetchMoreProps}
      productTypes={productTypes}
      categories={[product.category]}
      onBack={() => undefined}
      onSubmit={() => undefined}
      openChannelsModal={() => undefined}
      saveButtonBarState="default"
      warehouses={warehouseList}
    />
  ))
  .add("When loading", () => (
    <ProductCreatePage
      currentChannels={channels}
      allChannelsCount={5}
      hasChannelChanged={false}
      currency="USD"
      disabled={true}
      errors={[]}
      header="Add product"
      collections={product.collections}
      fetchCategories={() => undefined}
      fetchCollections={() => undefined}
      fetchProductTypes={() => undefined}
      fetchMoreCategories={fetchMoreProps}
      fetchMoreCollections={fetchMoreProps}
      fetchMoreProductTypes={fetchMoreProps}
      productTypes={productTypes}
      categories={[product.category]}
      onBack={() => undefined}
      onSubmit={() => undefined}
      openChannelsModal={() => undefined}
      saveButtonBarState="default"
      warehouses={undefined}
    />
  ))
  .add("form errors", () => (
    <ProductCreatePage
      currentChannels={channels}
      allChannelsCount={5}
      hasChannelChanged={false}
      currency="USD"
      disabled={false}
      errors={(["name", "productType", "category", "sku"] as Array<
        keyof ProductCreatePageSubmitData
      >).map(field => ({
        __typename: "ProductError",
        code: ProductErrorCode.INVALID,
        field
      }))}
      header="Add product"
      collections={product.collections}
      fetchCategories={() => undefined}
      fetchCollections={() => undefined}
      fetchProductTypes={() => undefined}
      fetchMoreCategories={fetchMoreProps}
      fetchMoreCollections={fetchMoreProps}
      fetchMoreProductTypes={fetchMoreProps}
      productTypes={productTypes}
      categories={[product.category]}
      onBack={() => undefined}
      onSubmit={() => undefined}
      openChannelsModal={() => undefined}
      saveButtonBarState="default"
      warehouses={warehouseList}
    />
  ));
