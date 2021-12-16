import React from 'react';
import data from 'data/pages/checkout.json';
import { ProductCartToken } from 'modules/product/types';

import { useAppSelector } from 'src/redux';
import { useCart } from 'modules/cart/hooks/useCart';
import { uiSelector } from 'src/redux/models/ui';

import {
  CheckoutSummaryHeading,
  CheckoutSummaryTableCell,
  CheckoutSummaryTableRow,
} from './styles/CheckoutSummaryBox';
import { ProductAmountButton } from 'modules/product/components/information/styles/ActionSection';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { SelectChangeEvent } from '@mui/material';

import ShoppingCartSummary from 'modules/cart/components/summary/ShoppingCartSummary';
import QuantitySelect from 'lib/components/select/QuantitySelect';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Color } from 'utils/keys';

type Props = {};

const CheckoutSummary: React.FunctionComponent<Props> = (): JSX.Element => {
  const cart = useCart();
  const ui = useAppSelector(uiSelector);

  //* -------------------------------------------------
  // Handlers

  function handleAddAmount(id: string): void {
    cart.addItemQuantity(id);
    cart.updateTotal(id);
  }

  function handleSubtractAmount(id: string): void {
    cart.subtractItemQuantity(id);
    cart.updateTotal(id);
  }

  function handleQuantitySelection(id: string, e: SelectChangeEvent): void {
    cart.updateQuantity(id, parseInt(e.target.value));
    cart.updateTotal(id);
  }

  function handleRemoveProduct(id: string): void {
    cart.remove(id);
  }

  //* -------------------------------------------------
  // Render

  return (
    <React.Fragment>
      <CheckoutSummaryHeading variant="h2">
        {data.summary.title}
      </CheckoutSummaryHeading>
      <TableContainer component={Container} disableGutters>
        <Table sx={{ minWidth: 100 }} aria-label="checkout summary table">
          <TableHead>
            <TableRow>
              {data.summary.heading.map((head: string, index: number) => (
                <CheckoutSummaryTableCell
                  align="left"
                  key={index}
                  sx={{
                    backgroundColor: '#bdbdbd',
                    fontWeight: 'bold',
                  }}>
                  {head}
                </CheckoutSummaryTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.items.map((item: ProductCartToken, index: number) => (
              <CheckoutSummaryTableRow key={index}>
                <CheckoutSummaryTableCell>
                  {item.product.name.length > 25
                    ? item.product.name.slice(0, 25).concat('...')
                    : item.product.name}
                </CheckoutSummaryTableCell>
                <CheckoutSummaryTableCell>
                  {ui.status.viewport === 'desktop' ||
                  ui.status.viewport === 'tablet' ? (
                    <React.Fragment>
                      <ProductAmountButton
                        variant={
                          ui.status.viewport === 'tablet' ? 'text' : 'outlined'
                        }
                        color="primary"
                        sx={{
                          backgroundColor:
                            (ui.status.viewport === 'desktop' && 'white') || '',
                        }}
                        onClick={() => handleSubtractAmount(item.product.id)}>
                        {'-'}
                      </ProductAmountButton>
                      <Typography variant="caption">{item.quantity}</Typography>
                      <ProductAmountButton
                        variant={
                          ui.status.viewport === 'tablet' ? 'text' : 'outlined'
                        }
                        sx={{
                          backgroundColor:
                            (ui.status.viewport === 'desktop' && 'white') || '',
                        }}
                        onClick={() => handleAddAmount(item.product.id)}>
                        {'+'}
                      </ProductAmountButton>
                    </React.Fragment>
                  ) : (
                    <QuantitySelect
                      value={item.quantity}
                      stock={item.stock}
                      onChange={(e: SelectChangeEvent) =>
                        handleQuantitySelection(item.product.id, e)
                      }
                    />
                  )}
                </CheckoutSummaryTableCell>
                <CheckoutSummaryTableCell>
                  {`$${item.total.toFixed(2)}`}
                </CheckoutSummaryTableCell>
                <CheckoutSummaryTableCell>
                  <IconButton
                    aria-label="remove product from cart"
                    onClick={() => handleRemoveProduct(item.product.id)}>
                    <HighlightOffRoundedIcon />
                  </IconButton>
                </CheckoutSummaryTableCell>
              </CheckoutSummaryTableRow>
            ))}
          </TableBody>
        </Table>
        <ShoppingCartSummary type={'checkout'} />
      </TableContainer>
    </React.Fragment>
  );
};

export default CheckoutSummary;
