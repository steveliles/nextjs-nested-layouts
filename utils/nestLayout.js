const nestLayout = (parent, child) => (page) => parent(child(page));

export default nestLayout;
