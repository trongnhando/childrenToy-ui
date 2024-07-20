import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../i18n/i18n';
import { SumProductContext } from '../../../../context/SumProductContext';

const HeaderUser = React.memo(() => {
  const { t } = useTranslation(['user_header']);
  const navigate = useNavigate();
  const {
    sumProduct,
    setSumProduct,
    userId,
    setUserId,
    locale,
    setLocale,
    setRoleId,
  } = useContext(SumProductContext);
  const [modal, setModal] = useState<boolean>(false);

  const changeLanguage = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const languageValue = e.target.value;
      setLocale(languageValue);
      sessionStorage.setItem('locale', languageValue);
      i18n.changeLanguage(languageValue);
    },
    [setLocale]
  );

  // const handleLogout = useCallback(async () => {
  //   try {
  //     setModal(false);
  //     await setUserId('');
  //     await setRoleId('');
  //     await setSumProduct(0);
  //     await sessionStorage.removeItem('userId');
  //     navigate('/');
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // }, [setSumProduct, setUserId, navigate, setRoleId]);

  const handleLogout = useCallback(async () => {
    if (confirm('Log out ???')) {
      setModal(false);
      await setUserId('');
      await setRoleId('');
      await setSumProduct(0);
      await sessionStorage.removeItem('userId');
      navigate('/');
    }
  }, [navigate, setRoleId, setSumProduct, setUserId]);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modal]);

  return (
    <>
      {/* {modal && (
        <div className="fixed flex w-full h-full bg-gray-500/75 top-0 left-0">
          <div className="flex flex-col w-3/12 h-auto bg-white m-auto items-center p-5 rounded index-30 font-bold">
            <div className="flex w-full flex-col">
              <span className="text-xl">
                Are you sure you want to log out ?
              </span>
              <hr className="mt-4" />
            </div>
            <div className="flex w-full justify-around mt-5">
              <button
                type="button"
                onClick={handleLogout}
                className="block bg-red-500 px-5 py-2 rounded hover:bg-red-600"
              >
                LOG OUT
              </button>
              <button
                type="button"
                onClick={() => setModal(false)}
                className="block bg-green-500 px-5 py-2 rounded hover:bg-green-600"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )} */}

      <Link
        to="/"
        className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0"
        aria-current="page"
      >
        {t('home')}
      </Link>

      <Link
        to="/product-list"
        className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0"
      >
        {t('product')}
      </Link>

      <Link
        to="/"
        className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0"
      >
        {t('service')}
      </Link>

      <Link
        to="/about"
        className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0"
      >
        {t('about')}
      </Link>

      <Link
        to="/contact"
        className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0"
      >
        {t('contact')}
      </Link>

      <Link
        to="/carts"
        className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0 relative"
      >
        {t('cart')}
        <span className="absolute px-1 text-white bg-blue-700 rounded-full sum-count font-bold">
          {sumProduct || 0}
        </span>
      </Link>

      {userId ? (
        <>
          <Link
            to="/my-account"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0"
          >
            {t('account')}
          </Link>

          <button
            // onClick={() => setModal(true)}
            onClick={handleLogout}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0"
          >
            {t('logout')}
          </button>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0"
          >
            {t('login')}
          </Link>

          <Link
            to="/register"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 font-bold md:p-0"
          >
            {t('register')}
          </Link>
        </>
      )}

      <select
        id="countries"
        className="block py-2 pl-4 pr-4 text-gray-900 rounded font-bold md:p-1"
        value={locale}
        onChange={changeLanguage}
      >
        <option value="eng">English</option>
        <option value="vie">Vietnamese</option>
      </select>
    </>
  );
});

export default HeaderUser;
