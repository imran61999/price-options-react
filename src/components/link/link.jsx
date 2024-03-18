

const link = ({route}) => {
    return (
        <div>
            <li className="mr-10" key={routes.id}><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default link;