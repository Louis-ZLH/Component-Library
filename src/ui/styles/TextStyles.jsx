export function Strong({ children }) {
  return (
    <strong>
      <WithHighlightColor>{children}</WithHighlightColor>
    </strong>
  );
}

export function WithHighlightColor({ children }) {
  return <span className="text-black dark:text-gray-300">{children}</span>;
}

export function Title({ children }) {
  return <span className="text-black dark:text-white">{children}</span>;
}
