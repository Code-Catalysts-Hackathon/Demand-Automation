export const getLocalToken = () => {
  return localStorage.getItem('token');
};

export const getAuthToken = () => {
  return 'Bearer ' + getLocalToken();
};

export const smoothScrollTo = (
  id: string,
  block?: any,
  className = '',
  callBack?: (id: any) => void
) => {
  const node = document.getElementById(id);
  if (node && node.scrollIntoView) {
    if (className) {
      node.classList.remove(className);
      node.classList.add(className);
    }
    node.scrollIntoView({
      behavior: 'smooth',
      block: block || 'center'
    });
    if (callBack) {
      callBack(id);
    }
  }
};



export const getPaginationList = (currentPage:number, totalPages:number, perSlide = 5) => {
    let pageslist = [];
    if (totalPages > perSlide) {
        let tmp = 0;
        let i = 0;
        if (currentPage > parseInt(String(perSlide / 2)) && !(((currentPage + 1) >= (totalPages - 1)) || ((currentPage + 1) >= (totalPages)))) {
            console.log("if " + currentPage + " " + parseInt(String(perSlide / 2)) + " " + perSlide)
            i = (currentPage - parseInt(String(perSlide / 2)));
            if (totalPages - i < perSlide) {
                i = totalPages - perSlide;
            }
            for (; i < totalPages; i++) {
                if (tmp === perSlide) {
                    break;
                }
                pageslist.push(i);
                tmp++;
            }

        } else {
            console.log("else " + currentPage + " " + parseInt(String(perSlide / 2)) + " " + perSlide)
            i = 0;
            if ((currentPage + 1) === (totalPages - 1)) {
                i = (currentPage - (parseInt(String(perSlide / 2))));
            } else if ((currentPage + 1) > (totalPages - 1)) {
                i = (currentPage - (parseInt(String(perSlide / 2))) - 1);
            }
            if (totalPages - i < perSlide) {
                i = totalPages - perSlide;
            }
            for (; i < totalPages; i++) {
                if (tmp === perSlide) {
                    break;
                }
                pageslist.push(i);
                tmp++;
            }
        }
    } else {
        for (let i = 0; i < totalPages; i++) {
            pageslist.push(i);
        }
    }
    return pageslist;
}
