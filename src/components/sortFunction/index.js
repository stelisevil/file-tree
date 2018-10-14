function sortFunction(data, userSort) {
  if (userSort === "added") {
    return data.sort((a, b) => {
      if (!a.added) {
        return -1
      }
      if (!b.added) {
        return 1
      }
      if (a.added < b.added) {
        return -1;
      }
      if (a.added > b.added) {
        return 1;
      }
      return 0;
    })
  } else if (userSort === "type") {
    return data.sort((a, b) => {
      if (a.type === "folder") {
        return -1
      }
      if (b.type === "folder") {
        return 1
      }
      if (a.type < b.type) {
        return -1;
      }
      if (a.type > b.type) {
        return 1;
      }
      return 0;
    })
  } else if (userSort === "name") {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
  } else if (userSort === "size") {
    return data.sort((a, b) => {
      if (!a.files) {
        return 1
      }
      if (!b.files) {
        return -1
      }
      if (a.files.length < b.files.length) {
        return -1;
      }
      if (a.files.length > b.files.length) {
        return 1;
      }
      return 0;
    })
  }
}

export default sortFunction
